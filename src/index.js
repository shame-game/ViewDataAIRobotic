const vam = document.querySelector.bind(document);
const vams = document.querySelectorAll.bind(document);
let wid = screen.width
// Chuyển trang 
vam('.sidebar__item.home').onclick = () => {
    if (vam('.sidebar__item--actived.home') == null) {
        if (wid < 1100) {
            document.querySelector('.bg.hide').classList.remove('hide')
            $('.account__container').toggleClass('hiden')
            $('.sidebar__container').toggleClass('hiden')
        }
        vam('.sidebar__item--actived.sidebar__item').classList.remove('sidebar__item--actived');
        vam('.sidebar__item.home').classList.add('sidebar__item--actived')
        vam('#main').innerHTML = '';
        vam('.topbar__title').innerText = 'Tổng quan'
        HienTrangChu()
    }
}
vam('.sidebar__item.student').onclick = () => {
    if (vam('.sidebar__item--actived.student') == null) {
        if (wid < 1100) {
            document.querySelector('.bg.hide').classList.remove('hide')
            $('.account__container').toggleClass('hiden')
            $('.sidebar__container').toggleClass('hiden')
        }
        vam('.sidebar__item--actived.sidebar__item').classList.remove('sidebar__item--actived');
        vam('.sidebar__item.student').classList.add('sidebar__item--actived')
        vam('#main').innerHTML = ''
        vam('.topbar__title').innerText = 'Học sinh'
        HienStudent()
        vam('#search').addEventListener('click', () => {
            vam('.detail__search>input').classList.add('hide')
            vam('.detail__search>button').classList.add('hiden')
            vam('.detail__search>input').value = ''
            vam('.detail__search p').addEventListener('click', () => {
                vam('.detail__search>input').classList.remove('hide')
                vam('.detail__search>button').classList.remove('hiden')
                vam('.detail__search>input').value = ''
            })
        })
    }
}
vam('.sidebar__item.data').onclick = () => {
    if (vam('.sidebar__item--actived.data') == null) {
        if (wid < 1100) {
            document.querySelector('.bg.hide').classList.remove('hide')
            $('.account__container').toggleClass('hiden')
            $('.sidebar__container').toggleClass('hiden')
        }
        vam('.sidebar__item--actived.sidebar__item').classList.remove('sidebar__item--actived');
        vam('.sidebar__item.data').classList.add('sidebar__item--actived')
        vam('#main').innerHTML = ''
        vam('.topbar__title').innerText = 'Dữ liệu'
        HienData()
        vam('#search').addEventListener('click', () => {
            vam('.detail__search>input').classList.add('hide')
            vam('.detail__search>button').classList.add('hiden')
            vam('.detail__search>input').value = ''
            vam('.detail__search p').addEventListener('click', () => {
                vam('.detail__search>input').classList.remove('hide')
                vam('.detail__search>button').classList.remove('hiden')
                vam('.detail__search>input').value = ''
            })
        })
    }
}


// điều khiển menu
if (wid < 1100) {
    $('.main__container').addClass('hiden')
    document.querySelector('.topbar__leading').addEventListener('click', () => {
        $('.account__container').toggleClass('hiden')
        $('.sidebar__container').toggleClass('hiden')
        $('.bg').toggleClass('hide')
        document.querySelector('.bg.hide').onclick = () => {
            document.querySelector('.bg.hide').classList.remove('hide')
            $('.account__container').toggleClass('hiden')
            $('.sidebar__container').toggleClass('hiden')
        }
        document.querySelector('.topbar-mobile').onclick = () => {
            document.querySelector('.bg.hide').classList.remove('hide')
            $('.account__container').toggleClass('hiden')
            $('.sidebar__container').toggleClass('hiden')
        }
    });
}
else {
    $('.topbar__leading').on('mousedown', e => {
        $('.main__container').toggleClass('hiden')
        $('.account__container').toggleClass('hiden')
        $('.sidebar__container').toggleClass('hiden')
        if (vam('.account__container.hiden') != null) {
            vam('#Logo_a').src = './src/image/Logomini.png';
            vam('.home').innerHTML = '<i class="bi bi-bar-chart-line-fill"></i>';
            vam('.student').innerHTML = '<i class="bi bi-person-fill"></i>';
            vam('.teacher').innerHTML = '<i class="bi bi-robot"></i>';
            vam('.data').innerHTML = '<i class="bi bi-robot"></i>';
        } else {
            vam('#Logo_a').src = './src/image/Logo.png';
            vam('.home').innerHTML = '<i class="bi bi-bar-chart-line-fill"></i>Tổng quan';
            vam('.student').innerHTML = '<i class="bi bi-person-fill"></i>Học sinh';
            vam('.teacher').innerHTML = '<i class="bi bi-robot"></i>Giáo viên';
            vam('.data').innerHTML = '<i class="bi bi-robot"></i>Dữ liệu';
        }
    });
}
HienTrangChu()

// Hiển thị học sinh
function HienStudent() {
    pageStudent(() => {
        loadstudent((callback) => {
            let danhsachlop = '<p>Tất cả lớp</p>';
            let items = '';
            let teacher = {};
            callback.forEach((data) => {
                if (data['Class'] != '') {
                    if (teacher[data['Class']]) {
                        teacher[data['Class']]++
                    }
                    else {
                        teacher[data['Class']] = 1
                    }
                }
            })
            Object.keys(teacher).forEach((key) => {
                danhsachlop += `<p>${key}</p>`
            })
            vam('.danhsachlop>div').innerHTML = danhsachlop
            callback.forEach((t) => {
                if (t.ID != '') {
                    items +=
                        `<div class="student__detail visi" data-name="${t.Fullname}" data-id="${t[['ID']]}" data-class="${t['Class']}">
                        <a>${t.ID}</a>
                        <a>${t.Fullname}</a>
                        <a>${t.Class}</a>
                        <a>${t.Address}</a>
                        <a>${t.Numbers}</a>
                        <a class="Student__status">${t.Status}</a>
                    </div>`
                }
            })
            vam('#student__data').innerHTML = items;
            vams('.student__detail').forEach((t) => {
                t.onclick = () => {
                    vam('#inforstudentdetail').setAttribute('style', 'display:block');
                    vam('.infordetail_wrap').setAttribute('style', 'display:block');
                    vam('#inforstudentdetail').onclick = () => {
                        vam('#inforstudentdetail').setAttribute('style', 'display:none');
                        vam('.infordetail_wrap').setAttribute('style', 'display:none');
                    }
                    callback.forEach((data) => {
                        if (t.getAttribute('data-id') == data['ID']) {
                            vam('.infordetail_back-mid__name>h1').innerText = data['Fullname'];
                            vam('#id_student').innerText = 'ID: ' + data['ID'];
                            vam('#class_student').innerText = 'Học lớp: ' + data['Class'];
                            vam('#parent_student').innerText = 'Họ và tên phụ huynh: ' + data['ParentName'];
                            vam('#address_student').innerText = 'Địa chỉ: ' + data['Address'];
                            vam('#email_student').innerText = 'Email: ' + data['Email'];
                            vam('#phone_student').innerText = 'Số điện thoại: ' + data['Numbers'];

                            async function kiemTraDuongDan(duongDan) {
                                try {
                                    const response = await fetch(duongDan);
                                    vam('#profile_student').onclick = () => {
                                        window.open(`${data['Profile']}`, '_blank');
                                    }
                                    if (!response.ok) {
                                        vam('#profile_student').onclick = () => {
                                            alert('Học sinh chưa có hồ sơ điện tử')
                                        }
                                    }
                                } catch (error) {

                                }
                            }
                            kiemTraDuongDan(`${data['Profile']}`);
                        }
                    })

                }
            })
            vams('.Student__status').forEach((t) => {
                if (t.innerText == 'Đang học') {
                    t.setAttribute('style', 'color:#29bcce')
                }
                else if (t.innerText == 'Chờ lên khóa') {
                    t.setAttribute('style', 'color:#fed45b')
                }
                else if (t.innerText == 'Nghỉ học') {
                    t.setAttribute('style', 'color:#f15353')
                }
            })
            vams('.danhsachlop>div>p').forEach((t) => {
                t.onclick = () => {
                    vam('.chonlop>button').innerText = t.innerText;
                    if (t.innerText == 'Tất cả lớp') {
                        vams('.student__detail').forEach((f) => {
                            if (f.getAttribute('class').includes("search") == true) {
                                f.classList.remove('search')
                            }
                            f.classList.add('visi')
                        })
                    }
                    else {
                        vams('.student__detail').forEach((f) => {
                            if (f.getAttribute('class').includes("visi") == true) {
                                f.classList.remove('visi')
                            }
                            if (f.getAttribute('class').includes("search") == true) {
                                f.classList.remove('search')
                            }
                            let g = f.getAttribute('data-class')
                            if (g == t.innerText) {
                                f.classList.add('visi')
                            }
                        })
                    }
                }
            })
        });
        vam('.detail__search>p').onclick = () => {
            vams(`.student__detail.visi`).forEach((t) => {
                if (t.getAttribute('class').includes("search") == true) {
                    t.classList.remove('search')
                }
            })
        }
        vam('.chonlop').onclick = () => {
            vam('.danhsachlop').classList.toggle('hide')
        }


    })
}
// tìm kiếm thông tin học sinh
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function searchData() {
    const searchValue = removeAccents(document.querySelector("#SearchStudent").value.toLowerCase());
    let data = [];
    vams(`.student__detail.visi`).forEach((t) => {
        data = data.concat(t.getAttribute('data-name'))
        t.classList.add('search')
    })
    const filteredData = data.filter(item => removeAccents(item.toLowerCase()).includes(searchValue));
    filteredData.forEach(item => {
        vams(`.student__detail.search[data-name="${item}"]`).forEach((t) => {
            t.classList.remove('search')
        })
    });
}

// Hiện thị trang chủ
function HienTrangChu() {
    pageHome(() => {
        loadstudent((callback) => {
            // datastudent
            var datastudent = callback;
            let slstudents = 0;
            let studentOB = {};
            datastudent.forEach((data) => {
                if (studentOB[data['ID']]) {
                    studentOB[data['ID']]++
                }
                else {
                    studentOB[data['ID']] = 1
                }
            })
            Object.keys(studentOB).forEach(() => {
                slstudents++
            })
            Slstudent(slstudents)
            // dataclass
            dataclass = callback
            let slclasss = 0;
            let classOB = {};
            dataclass.forEach((data) => {
                if (data['Class'] != '') {
                    if (classOB[data['Class']]) {
                        classOB[data['Class']]++
                    }
                    else {
                        classOB[data['Class']] = 1
                    }
                }
            })
            Object.keys(classOB).forEach(() => {
                slclasss++
            })
            Slclass(slclasss)
        });
        loadteacher((callback) => {
            dataclass = callback;
            let slteachers = 0;
            let teacherOB = {};
            dataclass.forEach((data) => {
                if (data['ID'] != '') {
                    if (teacherOB[data['ID']]) {
                        teacherOB[data['ID']]++
                    }
                    else {
                        teacherOB[data['ID']] = 1
                    }
                }
            })
            Object.keys(teacherOB).forEach(() => {
                slteachers++
            })
            Slteacher(slteachers)
        })
        // hiển thị dữ liệu thiết bị và biểu đồ thiết bị
        loaddevice((callback) => {
            datadevice = callback;
            Sldevice(datadevice[0]['Device']);
            Sldevicebroken(datadevice[0]['Device Broken']);
            Sldeviceloan(datadevice[0]['Equipment Loaned']);
            var doughnutData = {
                labels: ['Thiết bị có thể sử dụng', 'Thiết bị hỏng', 'Thiết bị cho mượn'],
                datasets: [{
                    label: 'Number of equipment',
                    data: [Number(datadevice[0]['Device']) - (Number(datadevice[0]['Device Broken']) + Number(datadevice[0]['Equipment Loaned'])), datadevice[0]['Device Broken'], datadevice[0]['Equipment Loaned']],
                    backgroundColor: [
                        '#d62323',
                        '#00f2aa',
                        '#9747ff',
                    ]
                }]
            };
            var doughnutChart = new Chart(document.getElementById('Home__Maind'), {
                type: 'doughnut',
                data: doughnutData,
                options: {
                    plugins: {
                        datalabels: {
                            color: 'black', // Màu của nhãn dữ liệu
                            anchor: 'end', // Vị trí neo của nhãn dữ liệu
                            align: 'top', // Sắp xếp của nhãn dữ liệu
                            formatter: function (value, context) {
                                return value; // Định dạng giá trị nhãn dữ liệu
                            }
                        }
                    }
                }
            });
        })
        loadstudent((callback) => {
            loadCustomer((callbackd) => {
                vam('#datadachamsoc').innerHTML = callbackd[0]['DataIsSupported'];
                vam('#data-day>h1').innerHTML = callbackd[0]['data (day)'] + ' Dữ liệu mới /ngày';
                vam('#data-day>div>div').setAttribute('style', `width:${callbackd[0]['data (day)'] / callbackd[0]['KPI data (day)'] * 100}%`);
                vam('#data-week>h1').innerHTML = callbackd[0]['data (week)'] + ' Dữ liệu mới /tuần';
                vam('#data-week>div>div').setAttribute('style', `width:${callbackd[0]['data (week)'] / callbackd[0]['KPI data (week)'] * 100}%`);
                vam('#data-student>h1').innerHTML = callback[0]['New student (week)'] + ' Học sinh mới /tuần';
                vam('#data-student>div>div').setAttribute('style', `width:${callback[0]['New student (week)'] / callback[0]['KPI New student (week)'] * 100}%`);
                vam('#data-leverup>h1').innerHTML = callback[0]['Waiting To Level Up'] + ' Học sinh chờ lên khóa';
                vam('#data-out>h1').innerHTML = callback[0]['Leave School'] + ' Học sinh nghỉ học';
            })
            vams('.Home__boxs').forEach((t) => {
                t.classList.remove('loading')
            })
            vams('.Home__Main-wrap>div').forEach((t) => {
                t.classList.remove('loading')
            })
        });
    })
}

// Hiện thị trang chủ
function HienData() {
    pageData(() => {
        loaddatacs((callback) => {
            let itemsday = ""
            let itemsw = ""
            let itemsm = ""
            callback.forEach((t) => {
                let g = '';
                let p = '';

                if (t.ByDay != '') {
                    if (t.StatusD == '0') {
                        g = 'Từ chối tham gia';
                        p = '#ff4f4f'
                    }
                    else if (t.StatusD == '') {
                        g = 'Chưa chăm sóc'
                        p = '#f0ff50'
                    }
                    else if (t.StatusD == '1') {
                        g = 'Đồng ý tham gia'
                        p = '#08c222'
                    }
                    else if (t.StatusD == '2') {
                        g = 'Trường hợp khác'
                        p = '#508bff'
                    }
                    itemsday +=
                        `<div class="data__detail visi">
                        <a>${t.ByDay}</a>
                        <a>${t.ParentName}</a>
                        <a style="color:${p}">${g}</a>
                    </div>`
                }
                if (t.ByWeek != '') {
                    if (t.StatusW == '0') {
                        g = 'Từ chối tham gia';
                        p = '#ff4f4f'
                    }
                    else if (t.StatusW == '') {
                        g = 'Chưa chăm sóc'
                        p = '#f0ff50'
                    }
                    else if (t.StatusW == '1') {
                        g = 'Đồng ý tham gia'
                        p = '#08c222'
                    }
                    else if (t.StatusW == '2') {
                        g = 'Trường hợp khác'
                        p = '#508bff'
                    }
                    itemsw +=
                        `<div class="data__detail visi">
                            <a>${t.ByWeek}</a>
                            <a>${t.ParentNameW}</a>
                            <a style="color:${p}">${g}</a>
                        </div>`
                }
                if (t.ByMonth != '') {
                    if (t.StatusM == '0') {
                        g = 'Từ chối tham gia';
                        p = '#ff4f4f'
                    }
                    else if (t.StatusM == '') {
                        g = 'Chưa chăm sóc'
                        p = '#f0ff50'
                    }
                    else if (t.StatusM == '1') {
                        g = 'Đồng ý tham gia'
                        p = '#08c222'
                    }
                    else if (t.StatusM == '2') {
                        g = 'Trường hợp khác'
                        p = '#508bff'
                    }
                    itemsm +=
                        `<div class="data__detail visi">
                            <a>${t.ByMonth}</a>
                            <a>${t.ParentNameM}</a>
                            <a style="color:${p}">${g}</a>
                        </div>`
                }
            })
            vam('#Data__data').innerHTML = itemsday;
            vam('.datacs_d').onclick = () => {
                vam('#Data__data').innerHTML = itemsday;
                vam('.chonlop>button').innerText = 'Dữ liệu chăm sóc trong ngày'
            }
            vam('.datacs_w').onclick = () => {
                vam('#Data__data').innerHTML = itemsw;
                vam('.chonlop>button').innerText = 'Dữ liệu chăm sóc trong tuần'
            }
            vam('.datacs_m').onclick = () => {
                vam('#Data__data').innerHTML = itemsm;
                vam('.chonlop>button').innerText = 'Dữ liệu chăm sóc trong tháng'
            }
        })
    })
}
// lấy dữ liệu học sinh
var data = []
function loadstudent(callback) {
    fetchSheet
        .fetch({
            gSheetId: '1seaoPDLCyGHanPFC78ovoaKqo9DMj-grSzNMDImFvwM',
            wSheetName: 'Data Student',
        })
        .then((rows) => {
            data = rows
            callback(data)
        });
}

// lấy dữ liệu giáo viên
function loadteacher(callback) {
    fetchSheet
        .fetch({
            gSheetId: '1seaoPDLCyGHanPFC78ovoaKqo9DMj-grSzNMDImFvwM',
            wSheetName: 'Data Teacher',
        })
        .then((rows) => {
            data = rows
            callback(data)
        });
}

// lấy dữ liệu khách hàng chưa xử lý 
function loadCustomer(callback) {
    fetchSheet
        .fetch({
            gSheetId: '1seaoPDLCyGHanPFC78ovoaKqo9DMj-grSzNMDImFvwM',
            wSheetName: 'Data Customer',
        })
        .then((rows) => {
            data = rows
            callback(data)
        });
}

// lấy dữ liệu thiết bị
function loaddevice(callback) {
    fetchSheet
        .fetch({
            gSheetId: '1seaoPDLCyGHanPFC78ovoaKqo9DMj-grSzNMDImFvwM',
            wSheetName: 'Data device',
        })
        .then((rows) => {
            data = rows
            callback(data)
        });
}

function loaddatacs(callback) {
    fetchSheet
        .fetch({
            gSheetId: '1seaoPDLCyGHanPFC78ovoaKqo9DMj-grSzNMDImFvwM',
            wSheetName: 'DataIsSupported',
        })
        .then((rows) => {
            data = rows
            callback(data)
        });
}

console.log('Cảnh báo bảo mật');