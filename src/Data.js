function pageData(callback) {
    vam('#main').innerHTML +=
        `<div id='T__Data' class="main-title row" style="height:100%;min-width:1100px;margin:0">
            <div class="col-lg-12" style="height: 100%;display: flex;flex-direction: column;padding: calc(20px + .5rem)">
                <div class="Data__Main">
                    <div class="Data__Main-wrap">
                        <div class="loading title">
                            <div class="chonlop">
                                <button>Dữ liệu chăm sóc trong ngày</button>
                                <i class="bi bi-caret-down-fill"></i>
                                <div class="danhsachdulieu">   
                                    <div>
                                    <p class="datacs_d">Dữ liệu chăm sóc trong ngày</p>
                                    <p class="datacs_w">Dữ liệu chăm sóc trong tuần</p>
                                    <p class="datacs_m">Dữ liệu chăm sóc trong tháng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Data__Main-wrap" style="margin-top: 1rem;height: calc(100% - 5rem);">
                        <div class="loading Data-detail" >
                            <div class="data__title">
                                <a>SĐT</a>
                                <a>Tên Phụ Huynh</a>
                                <a>Trạng thái chăm sóc</a>
                            </div>
                            <div id="Data__data" style="overflow: hidden;
                            overflow-y: auto;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    let data = 'd'
    callback(data);

}

/*                            <div class="detail__search">
                                <input type="search" onkeyup="searchData()" placeholder="Tìm kiếm bằng tên" id="SearchData">
                                    <button id="search" class="">
                                        <i class="bi bi-search"></i>
                                    </button>
                                    <p><i class="bi bi-x-lg"></i></p>
                            </div>*/
