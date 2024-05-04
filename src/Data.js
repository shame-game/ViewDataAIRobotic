var today = new Date();
var m = (today.getMonth() + 1)
if ((today.getMonth() + 1) < 10) {
    m = '0' + (today.getMonth() + 1)
} else {
    m = (today.getMonth() + 1)
}
var d = today.getDate()
if (today.getDate() < 10) {
    d = '0' + today.getDate()
} else {
    d = today.getDate()
}
var date = today.getFullYear() + '-' + m + '-' + d;
function pageData(callback) {
    vam('#main').innerHTML +=
        `<div id='T__Data' class="main-title row" style="height:100%;min-width:1100px;margin:0">
            <div class="col-lg-12" style="height: 100%;display: flex;flex-direction: column;padding: calc(20px + .5rem)">
                <div class="Data__Main">
                    <div class="Data__Main-wrap">
                        <div class="loading title">
                            <div class="chonlop">
                                <input style="    background: #ebecfe;
                                border: none;outline: none;" id="date_dsdl" type="date" value="${date}"/>
                            </div>
                        </div>
                    </div>
                    <div class="Data__Main-wrap row" style="justify-content: space-between;margin:0;margin-top: 1rem;height: calc(100% - 5rem);">
                        <div class="loading Data-detail col-lg-8" >
                            <div class="data__title">
                                <a>SĐT</a>
                                <a>Tên Phụ Huynh</a>
                                <a>Trạng thái chăm sóc</a>
                                <a>Thời gian chăm sóc</a>
                            </div>
                            <div id="Data__data" style="overflow: hidden;
                            overflow-y: auto;">
                            </div>
                        </div>
                        <div class=" col-lg-4" style="padding-right:0" >
                        <div class="loading Data-detail">
                        <div class="data__title">
                       <a id="content_slcs">Không có dữ liệu chăm sóc hôm nay</a> 
                    </div>
                    <div id="Data__data" style="overflow: hidden;flex: 1;display: flex;align-items: center;"><canvas id="Data-chamsoc"></canvas>
                    </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    let data = 'd'
    callback(data);

}

