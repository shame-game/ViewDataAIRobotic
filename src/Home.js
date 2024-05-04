function Slstudent(sl) {
    vam('#slstudent').innerText = sl;
}
function Slclass(sl) {
    vam('#slclass').innerText = sl;
}
function Slteacher(sl) {
    vam('#slteacher').innerText = sl;
}
function Sldevice(sl) {
    vam('#device').innerText = sl;
}
function Sldevicebroken(sl) {
    vam('#devicebroken').innerText = sl;
}
function Sldeviceloan(sl) {
    vam('#deviceloan').innerText = sl;
}
function pageHome(callback) {
    vam('#main').innerHTML +=
        `<div id='T__Home' class="main-title row">
            <div class="col-lg-12" style="height: 100%;display: flex;flex-direction: column;">
                <div class="row Home__Allbox">
                    <div class="col-lg-2 col-md-4 col-6 Home__boxs loading">
                        <div style="background-color: white;
                        border: 1px solid #57D0F6;
                        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px" >
                            <svg height="200px" width="200px" version="1.1" id="_x32_"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512" xml:space="preserve" fill="#57D0F6">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <style type="text/css">
                                        .st0 {
                                            fill: #2100C4;
                                        }
                                    </style>
                                    <g>
                                        <path class="st0"
                                            d="M81.44,116.972c23.206,0,42.007-18.817,42.007-42.008c0-23.215-18.801-42.016-42.007-42.016 c-23.216,0-42.016,18.801-42.016,42.016C39.424,98.155,58.224,116.972,81.44,116.972z">
                                        </path>
                                        <path class="st0"
                                            d="M224.166,245.037c0-0.856-0.142-1.673-0.251-2.498l62.748-45.541c3.942-2.867,4.83-8.411,1.963-12.362 c-1.664-2.285-4.342-3.652-7.17-3.652c-1.877,0-3.667,0.589-5.191,1.689l-62.874,45.636c-2.341-1.068-4.909-1.704-7.65-1.704 h-34.178l-8.294-47.222c-4.555-23.811-14.112-42.51-34.468-42.51h-86.3C22.146,136.873,0,159.019,0,179.383v141.203 c0,10.178,8.246,18.432,18.424,18.432c5.011,0,0,0,12.864,0l7.005,120.424c0,10.83,8.788,19.61,19.618,19.61 c8.12,0,28.398,0,39.228,0c10.83,0,19.61-8.78,19.61-19.61l9.204-238.53h0.463l5.27,23.269c1.744,11.097,11.293,19.28,22.524,19.28 h51.534C215.92,263.461,224.166,255.215,224.166,245.037z M68.026,218.861v-67.123h24.126v67.123l-12.817,15.118L68.026,218.861z">
                                        </path>
                                        <polygon class="st0"
                                            points="190.326,47.47 190.326,200.869 214.452,200.869 214.452,71.595 487.874,71.595 487.874,302.131 214.452,302.131 214.452,273.113 190.326,273.113 190.326,326.256 512,326.256 512,47.47 ">
                                        </polygon>
                                        <path class="st0"
                                            d="M311.81,388.597c0-18.801-15.235-34.029-34.028-34.029c-18.801,0-34.036,15.228-34.036,34.029 c0,18.785,15.235,34.028,34.036,34.028C296.574,422.625,311.81,407.381,311.81,388.597z">
                                        </path>
                                        <path class="st0"
                                            d="M277.781,440.853c-24.259,0-44.866,15.919-52.782,38.199h105.565 C322.648,456.771,302.04,440.853,277.781,440.853z">
                                        </path>
                                        <path class="st0"
                                            d="M458.573,388.597c0-18.801-15.235-34.029-34.028-34.029c-18.801,0-34.036,15.228-34.036,34.029 c0,18.785,15.235,34.028,34.036,34.028C443.338,422.625,458.573,407.381,458.573,388.597z">
                                        </path>
                                        <path class="st0"
                                            d="M424.545,440.853c-24.259,0-44.866,15.919-52.783,38.199h105.565 C469.411,456.771,448.804,440.853,424.545,440.853z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            <h4 id="slclass">0</h4>
                            <p>Lớp học</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 Home__boxs loading">
                        <div style="background-color: white;
                        border: 1px solid #FF7439;
                        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px">
                            <svg fill="#FF7439" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M226.52979,56.41016l-96-32a8.00672,8.00672,0,0,0-5.05958,0L29.6239,56.35889l-.00976.00341-.14393.04786c-.02819.00927-.053.02465-.08105.03442a7.91407,7.91407,0,0,0-1.01074.42871c-.03748.019-.07642.03516-.11353.05469a7.97333,7.97333,0,0,0-.93139.58325c-.06543.04688-.129.09522-.19288.144a8.08459,8.08459,0,0,0-.81872.71119c-.0238.02416-.04443.05053-.06787.0747a8.0222,8.0222,0,0,0-.661.783c-.04163.05567-.08472.10986-.12476.16675a8.00177,8.00177,0,0,0-.56714.92993c-.02588.04981-.04809.10083-.073.15112a7.97024,7.97024,0,0,0-.40515.97608c-.01062.03149-.0238.06128-.03405.093a7.95058,7.95058,0,0,0-.26282,1.08544c-.01331.07666-.02405.15308-.035.23A8.02888,8.02888,0,0,0,24,64v80a8,8,0,0,0,16,0V75.09985L73.58521,86.29492a63.9717,63.9717,0,0,0,20.42944,87.89746,95.88087,95.88087,0,0,0-46.48389,37.4375,7.9997,7.9997,0,1,0,13.40235,8.73828,80.023,80.023,0,0,1,134.1333,0,7.99969,7.99969,0,1,0,13.40234-8.73828,95.87941,95.87941,0,0,0-46.4834-37.43725,63.972,63.972,0,0,0,20.42944-87.89771l44.115-14.70508a8.0005,8.0005,0,0,0,0-15.17968ZM128,168A47.99154,47.99154,0,0,1,89.34875,91.54932l36.12146,12.04052a8.00672,8.00672,0,0,0,5.05958,0l36.12146-12.04052A47.99154,47.99154,0,0,1,128,168Z">
                                    </path>
                                </g>
                            </svg>
                            <h4 id="slstudent">0</h4>
                            <p>Học sinh</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 Home__boxs loading">
                        <div style="background-color: white;
                        border: 1px solid #57D0F6;
                        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px">
                            <svg fill="#57D0F6" height="200px" width="200px" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 511.999 511.999" xml:space="preserve">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <g>
                                            <path
                                                d="M302.195,11.833H13.049C5.842,11.833,0,17.675,0,24.882v214.289c0,7.207,5.842,13.049,13.049,13.049h283.839 l-34.352-21.329c-2.247-1.396-4.282-3.002-6.109-4.768H26.097V37.93h263.049v126.703c4.01,0.847,7.943,2.39,11.625,4.677 l14.473,8.986V24.882C315.244,17.675,309.402,11.833,302.195,11.833z">
                                            </path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M216.857,134.337c-4.352-3.43-10.665-2.685-14.097,1.668c-3.432,4.353-2.686,10.665,1.668,14.097l44.279,34.914 c0.63-1.371,1.34-2.719,2.156-4.034c2.883-4.643,6.649-8.401,10.94-11.206L216.857,134.337z">
                                            </path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <circle cx="419.71" cy="81.405" r="37.557"></circle>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M511.33,173.609c-0.118-23.528-19.355-42.67-42.884-42.67H450.26c-17.831,46.242-11.329,29.381-22.507,58.37l4.709-23.724 c0.346-1.744,0.067-3.555-0.79-5.113l-7.381-13.424l6.551-11.914c0.454-0.826,0.438-1.829-0.041-2.64 c-0.479-0.811-1.352-1.308-2.293-1.308h-17.96c-0.942,0-1.813,0.497-2.293,1.308s-0.495,1.815-0.041,2.64l6.537,11.889 l-7.367,13.4c-0.873,1.589-1.147,3.438-0.77,5.211l5.438,23.675c-3.119-8.087-21.08-52.728-23.255-58.37h-17.83 c-23.529,0-42.766,19.141-42.884,42.67c-0.098,19.565-0.016,3.179-0.17,33.884l-36.702-22.787 c-8.501-5.28-19.674-2.667-24.953,5.836c-5.279,8.503-2.666,19.675,5.836,24.954l64.219,39.873 c12.028,7.47,27.609-1.167,27.68-15.304c0.036-7.091,0.292-57.809,0.334-66.275c0.013-2.092,1.714-3.776,3.805-3.769 c2.089,0.007,3.779,1.703,3.779,3.794c-0.018,87.323-0.394,111.735-0.394,304.606c0,12.01,9.736,21.746,21.746,21.746 s21.746-9.736,21.746-21.746V304.604h9.388v173.817c0,12.01,9.736,21.746,21.746,21.746s21.746-9.736,21.746-21.746l0.008-304.612 c0-1.981,1.604-3.589,3.586-3.595c1.981-0.006,3.595,1.594,3.605,3.577l0.669,133.132c0.05,9.977,8.154,18.03,18.119,18.03 c0.031,0,0.062,0,0.094,0c10.007-0.05,18.081-8.205,18.03-18.212L511.33,173.609z">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <h4 id="slteacher">0</h4>
                            <p>Giáo viên</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 Home__boxs loading">
                        <div style="background-color: white;
                        border: 1px solid #D62323;
                        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px">
                            <svg fill="#D62323" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 19C12 15.1 15.1 12 19 12C19.7 12 20.4 12.1 21 12.3V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12.3C12.1 20.4 12 19.7 12 19ZM5 8V5H19V8H5Z">
                                    </path>
                                    <path
                                        d="M21.304 18.9781C20.6275 19.6547 19.6472 19.8342 18.8049 19.5373L16.4508 21.8914C16.3128 22.0295 16.0987 22.0295 15.9607 21.8914L14.9942 20.9249C14.8561 20.7868 14.8561 20.5728 14.9942 20.4348L17.3483 18.0806C17.0514 17.2384 17.2309 16.2581 17.9075 15.5816C18.6738 14.8153 19.8267 14.6841 20.7379 15.1742L19.1156 16.7966L20.089 17.77L21.7114 16.1476C22.2015 17.052 22.0703 18.2118 21.304 18.9781Z">
                                    </path>
                                </g>
                            </svg>
                            <h4 id="device">0</h4>
                            <p>Thiết bị</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 Home__boxs loading">
                        <div style="background-color: white;
                        border: 1px solid #00F2AA;
                        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px">
                            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#00F2AA">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>device-mobile-priority</title>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="invisible_box" data-name="invisible box">
                                            <rect width="48" height="48" fill="none"></rect>
                                        </g>
                                        <g id="icons_Q2" data-name="icons Q2">
                                            <path
                                                d="M35,6V42H13V6H35m2-4H11A2,2,0,0,0,9,4V44a2,2,0,0,0,2,2H37a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2Z">
                                            </path>
                                            <path d="M25,36H23a2,2,0,0,0,0,4h2a2,2,0,0,0,0-4Z"></path>
                                            <path d="M24,23a2,2,0,0,0,2-2V11a2,2,0,0,0-4,0V21A2,2,0,0,0,24,23Z"></path>
                                            <circle cx="24" cy="27" r="2"></circle>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <h4 id="devicebroken">0</h4>
                            <p>Thiết bị hỏng</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 Home__boxs loading">
                        <div style="background-color: white;
                        border: 1px solid #9747FF;
                        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px">
                            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#9747FF">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>device-multiple</title>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="invisible_box" data-name="invisible box">
                                            <rect width="48" height="48" fill="none"></rect>
                                        </g>
                                        <g id="icons_Q2" data-name="icons Q2">
                                            <g>
                                                <path
                                                    d="M42,23V41H34V23h8m2-4H32a2,2,0,0,0-2,2V43a2,2,0,0,0,2,2H44a2,2,0,0,0,2-2V21a2,2,0,0,0-2-2Z">
                                                </path>
                                                <path
                                                    d="M38,7H7A2,2,0,0,0,5,9V31a2,2,0,0,0,2,2H26V29H9V11H36v4h4V9A2,2,0,0,0,38,7Z">
                                                </path>
                                                <path d="M26,37v4H4a2,2,0,0,1,0-4Z"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <h4 id="deviceloan">0</h4>
                            <p>Thiết bị cho mượn</p>
                        </div>
                    </div>
                </div>
                <div class="Home__Main row">
                    <div class="Home__Main-wrap col-lg-8">
                        <div class="loading">
                            <div><h1 style="font-weight: bold;text-transform: uppercase;">Dữ liệu mới và học sinh</h1></div>
                            <div class="maindast">
        <div>
            <h1 style="display:flex;gap:1rem;margin:0px">Số data chăm sóc thành công trong tháng: <p id="datadachamsoc"></p></h1>
        </div>
        <div class="mun">
            <h1>Dữ liệu chăm sóc (ngày)</h1>
            <div id="data-day">
                <div>
                    <div  style=""></div>
                </div>
                <h1></h1>
            </div>
        </div>
        <div class="mun">
            <h1>Dữ liệu chăm sóc (tháng)</h1>
            <div id="data-week">
                <div>
                    <div style=""></div>
                </div>
                <h1></h1>
            </div>
        </div>
        <div class="mun">
            <h1>Học sinh mới (tuần)</h1>
            <div id="data-student">
                <div>
                    <div style=""></div>
                </div>
                <h1></h1>
            </div>
        </div>
        <div class="mun">
            <h1>Chờ lên khóa</h1>
            <div id="data-leverup">
                <div>
                    <div style=""></div>
                </div>
                <h1></h1>
            </div>
        </div>
        <div class="mun">
            <h1>Đã nghỉ học</h1>
            <div id="data-out">
                <div>
                    <div style=""></div>
                </div>
                <h1>45 học sinh</h1>
            </div>
        </div>
    </div>
                        </div>
                    </div>
                    <div class="Home__Main-wrap col-lg-4">
                        <div class="loading">
                            <div><h1 style="font-weight: bold;text-transform: uppercase;">Dữ liệu thiết bị</h1></div>
                            <div class="canvas">
                                <canvas id="Home__Maind"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    let data = 'd'
    callback(data);
}


