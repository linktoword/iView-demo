 $(function(){
    var markersArray = [
        {lat: 39.115168, lng: 116.003875},
        {lat: 39.315168, lng: 116.103875},
        {lat: 39.615168, lng: 116.203875},
        {lat: 39.915168, lng: 116.303875},
        {lat: 39.015168, lng: 116.403875},
        {lat: 38.915168, lng: 116.603875},
        {lat: 38.915168, lng: 117.603875}
    ]
    var clickAddMarkersArray = []; // 储存点击添加的标记

    function initMap() {
        //创建谷歌地图
        // 创建地图时你可以通过设置选项指定哪些控件集显示或者通过调用 setOptions() 来改变地图的设置选项。
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 9,                                    // 地图默认缩放比例
            center: {lat: 39.315168, lng: 116.103875},  // 默认中心点
            //mapTypeId: google.maps.MapTypeId.SATELLITE,  // 指定地图展示类型：卫星图像、普通道路
            scrollwheel: true,          　　　　　　　　　 // 是否允许滚轮滑动进行缩放
            disableDefaultUI: true, // 地图默认控件的显示 设置为true 则不显示 
            mapTypeControl: true,
        });

        // 添加自定义控件
        let centerControlDiv = document.createElement('div');
        let centerControl = new CenterControl(centerControlDiv, map);
        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

        // 遍历数组的每个点 添加标记
        let markers = markersArray.map(function(e, i) {
            let marker = new google.maps.Marker({
                position: e,
                //label: `${i + 1}` ,// 标记中显示的内容
                animation:google.maps.Animation.BOUNCE,
                draggable: true, // 这里就是拖动
                icon: "./device_tag_on.png" // 标记样式
            });

            // 每个点注册拖动事件
            google.maps.event.addListener(marker, 'dragend', function(MouseEvent) {
                let infowindow = new google.maps.InfoWindow({
                    content: '纬度: ' + MouseEvent.latLng.lat() + '<br>经度: ' + MouseEvent.latLng.lng()
                });
                infowindow.open(map,marker);
            });

            google.maps.event.addListener(marker, 'click', function(e) {
                $("#demo-detail").show();
            });

            return marker;
        });

        // 绘制园
        let myCity = new google.maps.Circle({
                center:{lat: 39.527168, lng: 115.374875},
                radius:20000,
                strokeColor:"#0000FF",
                strokeOpacity:0.8,
                strokeWeight:2,
                fillColor:"#0000FF",
                fillOpacity:0.4
            });
        myCity.setMap(map);

        // 绘制折线图形 闭合
        let myTrip = [{lat: 39.124168, lng: 118.452275},
        {lat: 38.564168, lng: 117.60075},
        {lat: 38.072168, lng: 118.83675}];
        let flightPath = new google.maps.Polygon({
            path:myTrip,
            strokeColor:"#0000FF",
            strokeOpacity:0.8,
            strokeWeight:2,
            fillColor:"#0000FF",
            fillOpacity:0.4
        });
        flightPath.setMap(map);

        // 提示窗口
        let infowindowOne = new google.maps.InfoWindow({
            content:"Hello World!"
        });
        infowindowOne.open(map, markers[1]); // 第二个参数是marker对象 不是一个点对象

        // 添加标记点击事件
        google.maps.event.addListener(markers[6],'click',function() {
            map.setZoom(10); // 设置缩放级别
            map.setCenter(markers[6].getPosition()); // 设置以某点为中心
        });

        // 给单个标记添加点击事件
        // let infowindow = new google.maps.InfoWindow({content: "北京市天安门" }); // 创建一个InfoWindow
        // google.maps.event.addListener(markers[3], "click", function(){
        //     infowindow.open(map,markers[3]);
        // });

        // 在地图上点击 清除已经点击添加的标记 并添加新标记并弹出信息窗口
        function placeMarker(location) {
            // 清除已经添加的标记
            if (clickAddMarkersArray) {
                for(i in clickAddMarkersArray) {
                    clickAddMarkersArray[i].setMap(null);
                } 
            }
            
            let marker = new google.maps.Marker({
                position: location,
                map: map,
                animation:google.maps.Animation.BOUNCE,
                draggable: true,//这里就是拖动
                icon: "./device_tag_on.png" // 标记样式
            });

            // let infowindow = new google.maps.InfoWindow({
            //   content: '经度: ' + location.lat() + '<br>纬度: ' + location.lng()
            // });
            // infowindow.open(map,marker);

            clickAddMarkersArray.push(marker); // 将动态添加的标记添加进去 便于删除标记
        }

        google.maps.event.addListener(map, 'click', function(event) {
            placeMarker(event.latLng);
        });


        let trackPoints = [
            new google.maps.LatLng(39.115168, 116.003875),
            new google.maps.LatLng(39.125168, 116.013875),
            new google.maps.LatLng(39.135168, 116.023875),
            new google.maps.LatLng(39.145168, 116.033875),
            new google.maps.LatLng(39.155168, 116.043875),
            new google.maps.LatLng(39.165168, 116.053875),
            new google.maps.LatLng(39.175168, 116.063875),
            new google.maps.LatLng(39.185168, 116.070387),
            new google.maps.LatLng(39.185168, 116.070387),
            new google.maps.LatLng(39.185168, 116.070387),
            new google.maps.LatLng(39.385168, 116.170387),
            new google.maps.LatLng(39.785168, 116.270387),
            new google.maps.LatLng(39.585168, 116.370387),
            new google.maps.LatLng(39.695168, 116.483875)
            ];
       let trackPath = new google.maps.Polyline({
                path: trackPoints,
                strokeColor: "#2db7f5", // 线条颜色
                strokeOpacity: 1.0, // 线条透明度
                strokeWeight: 2 // 线条粗细
            });
 
            trackPath.setMap(map);




        // 添加标记聚类器以管理标记。
        let markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }


    $(".fa-close").click(function(){
        closeWindow();
    })
    // 关闭信息窗口函数
    function closeWindow(){
        $("#demo-detail").hide();
    }
    initMap();


    // 创建自定义的控件
    function CenterControl(controlDiv, map) {

        // Set CSS for the control border.
        let controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to recenter the map';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        let controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = '我是自定义的控件';
        controlUI.appendChild(controlText);

        // Setup the click event listeners: simply set the map to Chicago.
        controlUI.addEventListener('click', function() {
          alert("我是自定义的控件");
        });

      }

 })   
    