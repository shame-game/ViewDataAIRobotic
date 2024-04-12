
function pageStudent(callback) {
    vam('#main').innerHTML +=
        `<div id='T__Student' class="main-title row" style="height:100%;min-width:1100px;margin:0">
            <div class="col-lg-12" style="height: 100%;display: flex;flex-direction: column;padding: calc(20px + .5rem)">
                <div class="Student__Main">
                    <div class="Student__Main-wrap">
                        <div class="loading title">
                            <div class="chonlop">
                                <button>Tất cả lớp</button>
                                <i class="bi bi-caret-down-fill"></i>
                                <div class="danhsachlop">   
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="detail__search">
                                <input type="search" onkeyup="searchData()" placeholder="Tìm kiếm bằng tên" id="SearchStudent">
                                    <button id="search" class="">
                                        <i class="bi bi-search"></i>
                                    </button>
                                    <p><i class="bi bi-x-lg"></i></p>
                            </div>
                        </div>
                    </div>
                    <div class="Student__Main-wrap" style="margin-top: 1rem;height: calc(100% - 5rem);">
                        <div class="loading student-detail" >
                            <div class="student__title">
                                <a>STT</a>
                                <a>Họ và tên</a>
                                <a>Lớp</a>
                                <a>Địa chỉ</a>
                                <a>Số điện thoại</a>
                                <a>Trạng thái</a>
                            </div>
                            <div id="student__data" style="overflow: hidden;
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


