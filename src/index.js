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
            vam('.data').innerHTML = '<i class="bi bi-robot"></i>';

        } else {
            vam('#Logo_a').src = './src/image/Logo.png';
            setTimeout(() => {
                vam('.home').innerHTML = '<i class="bi bi-bar-chart-line-fill"></i>Tổng quan';
                vam('.student').innerHTML = '<i class="bi bi-person-fill"></i>Học sinh';
                vam('.data').innerHTML = '<i class="bi bi-robot"></i>Dữ liệu';
            }, 200)
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

    loaddatacs((callback) => {
        let i = 0
        let dlmd = 0
        let undlmd = 0
        let dlmm = 0
        let undlmm = 0
        callback.forEach((t) => {
            if (date.slice(-2) == t.Date.slice(0, 2) && date.slice(5, -3) == t.Date.slice(3, 5) && date.slice(0, 4) == t.Date.slice(6, 10)) {
                if (t.StatusD != '') {
                    dlmd++
                } else {
                    undlmd++
                }
            }
            if (date.slice(5, -3) == t.Date.slice(3, 5) && date.slice(0, 4) == t.Date.slice(6, 10)) {
                if (t.StatusD == '1') {
                    i++
                }
                if (t.StatusD != '') {
                    dlmm++
                }
                if (t.StatusD == '') {
                    undlmm++
                }
            }
        })
        console.log(dlmm, undlmm);
        vam('#datadachamsoc').innerHTML = i;
        vam('#data-day>h1').innerHTML = dlmd + ' Dữ liệu / hôm nay';
        vam('#data-day>div>div').setAttribute('style', `width:${(undlmd + dlmd) / dlmd * 100}%`);
        vam('#data-week>h1').innerHTML = dlmm + ` Dữ liệu / tháng ${date.slice(5, -3)}`;
        vam('#data-week>div>div').setAttribute('style', `width:${(undlmm + dlmm) / dlmm * 100}%`);
    })

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
var f = 0



// Hiện thị data
function HienData() {
    pageData(() => {
        loaddatacs((callback) => {
            let itemsdaychange = ''
            let dyd = 0
            let tcd = 0
            let tcs = 0
            let cd = 0
            let kd = 0
            callback.forEach((t) => {
                if (vam('#date_dsdl').value.slice(-2) == t.Date.slice(0, 2) && vam('#date_dsdl').value.slice(5, -3) == t.Date.slice(3, 5) && vam('#date_dsdl').value.slice(0, 4) == t.Date.slice(6, 10)) {

                    if (t['StatusD'] == '') {
                        cd++
                    }
                    else if (t['StatusD'] == 1) {
                        dyd++
                    }
                    else if (t['StatusD'] == 2) {
                        kd++
                    }
                    else if (t['StatusD'] == 0) {
                        tcd++
                    }
                    else if (t['StatusD'] == 3) {
                        tcs++
                    }
                }
            })
            // In ra danh sách khách hàng đã đưa vào danh sách chăm sóc
            let f = 0
            let k = 0
            let j = 0
            let h = 0
            let l = 0
            function Indanhsach() {
                f = 0
                k = 0
                j = 0
                h = 0
                l = 0
                itemsdaychange = ''
                callback.forEach((t) => {
                    let g = '';
                    let p = '';
                    if (t.StatusD == '0') {
                        g = 'Từ chối tham gia';
                        p = '#ff4f4f'
                    }
                    else if (t.StatusD == '') {
                        g = 'Chưa chăm sóc'
                        p = '#ffdd00'
                    }
                    else if (t.StatusD == '1') {
                        g = 'Đồng ý tham gia'
                        p = '#08c222'
                    }
                    else if (t.StatusD == '2') {
                        g = 'Đang chăm sóc'
                        p = '#508bff'
                    }
                    else if (t.StatusD == '3') {
                        g = 'Tái chăm sóc'
                        p = '#ff08ce'
                    }

                    if (vam('#date_dsdl').value.slice(-2) == t.Date.slice(0, 2) && vam('#date_dsdl').value.slice(5, -3) == t.Date.slice(3, 5) && vam('#date_dsdl').value.slice(0, 4) == t.Date.slice(6, 10)) {
                        itemsdaychange +=
                            `<div class="data__detail visi">
                                <a>${t.Phone}</a>
                                <a>${t.ParentName}</a>
                                <a style="color:${p}">${g}</a>
                                <a>${t['Date']}</a>
                            </div>`
                        if (t['StatusD'] == '') {
                            k++
                        }
                        else if (t['StatusD'] == 1) {
                            h++
                        }
                        else if (t['StatusD'] == 2) {
                            j++
                        }
                        else if (t['StatusD'] == 0) {
                            f++
                        }
                        else if (t['StatusD'] == 3) {
                            l++
                        }
                        vam('#content_slcs').innerText = `Dữ liệu chăm sóc khách hàng ngày ${t.Date}`
                    }

                })
                if (itemsdaychange == '') {
                    vam('#Data__data').innerHTML =
                        `<div style="display: flex;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;user-select: none;">
                            <img style="width:50%" src="https://lh3.googleusercontent.com/d/1xHrdpQSibXvM8dinGovhKazmKCFM5WmD"/>
                            <p style="text-align:center">Không có dữ liệu chăm sóc trong hôm nay</p>
                        </div>`
                } else {
                    vam('#Data__data').innerHTML = itemsdaychange
                }
                return f

            }
            vam('#date_dsdl').onchange = () => {
                Indanhsach()
                doughnut.destroy();
                doughnut = new Chart(document.getElementById('Data-chamsoc'), {
                    type: 'doughnut',
                    data: {
                        labels: ['Từ chối tham gia', 'Chưa chăm sóc', 'Đồng ý tham gia', 'Đang chăm sóc', 'Tái chăm sóc'],
                        datasets: [{
                            label: 'Number of equipment',
                            data: [f, k, h, j, l],
                            backgroundColor: [
                                '#ff4f4f',
                                '#f0ff50',
                                '#08c222',
                                '#508bff',
                                '#ff08ce'
                            ]
                        }]
                    },
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
            }
            Indanhsach()
            let datad = [tcd, cd, dyd, kd, tcs]
            var datam = {
                labels: ['Từ chối tham gia', 'Chưa chăm sóc', 'Đồng ý tham gia', 'Đang chăm sóc', 'Tái chăm sóc'],
                datasets: [{
                    label: 'Number of equipment',
                    data: datad,
                    backgroundColor: [
                        '#ff4f4f',
                        '#f0ff50',
                        '#08c222',
                        '#508bff',
                        '#ff08ce'
                    ]
                }]
            };
            var doughnut = new Chart(document.getElementById('Data-chamsoc'), {
                type: 'doughnut',
                data: datam,
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