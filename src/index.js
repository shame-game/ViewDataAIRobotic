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
        vam('.topbar__title').innerText = 'Overview'
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
        vam('.topbar__title').innerText = 'Student'
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
            // vam('.device').innerHTML = '<i class="bi bi-robot"></i>';
        } else {
            vam('#Logo_a').src = './src/image/Logo.png';
            vam('.home').innerHTML = '<i class="bi bi-bar-chart-line-fill"></i>Overview';
            vam('.student').innerHTML = '<i class="bi bi-person-fill"></i>Student';
            // vam('.device').innerHTML = '<i class="bi bi-robot"></i>Device';
        }
    });
}
HienTrangChu()

// Hiển thị học sinh
function HienStudent() {
    pageStudent(() => {
        loadstudent((callback) => {
            let items = '';
            let g = ''
            callback.forEach((t) => {
                if (t['Profile'] == '') {
                    g = `<a>Chưa có</a>`
                }
                else {
                    g = `<a href="${t.Status}">Xem thêm</a>`
                }
                items +=
                    `<div class="student__detail" data-name="${t.Fullname}">
                        <a>${t.ID}</a>
                        <a>${t.Fullname}</a>
                        <a>${t.Class}</a>
                        <a>${t.Address}</a>
                        <a>${t.Numbers}</a>
                        <a class="Student__status">${t.Status}</a>
                        ${g}
                    </div>`
            })
            vam('#student__data').innerHTML = items
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
        });
        vam('.detail__search>p').onclick = () => {
            console.log('hello');
            vams(`.student__detail`).forEach((t) => {
                t.setAttribute('style', 'display:flex')
            })
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
    vams('.student__detail').forEach((t) => {
        data = data.concat(t.getAttribute('data-name'))
        t.setAttribute('style', 'display:none')
    })
    const filteredData = data.filter(item => removeAccents(item.toLowerCase()).includes(searchValue));
    filteredData.forEach(item => {
        vams(`.student__detail[data-name="${item}"]`).forEach((t) => {
            t.setAttribute('style', 'display:flex')
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
                if (classOB[data['Class']]) {
                    classOB[data['Class']]++
                }
                else {
                    classOB[data['Class']] = 1
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
                if (teacherOB[data['ID']]) {
                    teacherOB[data['ID']]++
                }
                else {
                    teacherOB[data['ID']] = 1
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
                labels: ['Remaining Equipment', 'Device Broken', 'Equipment has been borrowed'],
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
                const datatext = {
                    labels: ['New Data (day)', 'New Data (week)', 'New Student (week)', 'Waiting To Level Up', 'Leave School'],
                    datasets: [
                        {
                            label: 'Value',
                            data: [callbackd[0]['data (day)'], callbackd[0]['data (week)'], callback[0]['New student (week)'], callback[0]['Waiting To Level Up'], callback[0]['Leave School']],
                            backgroundColor: '#57D0F6',
                            stack: 'Stack 0',
                        },
                        {
                            label: 'KPI',
                            data: [callbackd[0]['KPI data (day)'], callbackd[0]['KPI data (week)'], callback[0]['KPI New student (week)']],
                            backgroundColor: '#5D87FF', // Changed color
                            stack: 'Stack 0',
                        }
                    ]
                };
                const config = {
                    type: 'bar',
                    data: datatext,
                    options: {
                        indexAxis: 'y',
                        responsive: true,
                        interaction: {
                            intersect: false,
                        },
                        scales: {
                            x: {
                                stacked: true,
                            },
                            y: {
                                stacked: true
                            }
                        },
                        barPercentage: 0.5,
                        plugins: {
                            datalabels: {
                                anchor: 'end',
                                align: 'top',
                                formatter: (value) => {
                                    return value.toLocaleString();
                                },
                            }
                        }
                    }
                };
                var myChart = new Chart(
                    document.getElementById('Home__Main'),
                    config
                );
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

console.log('Cảnh báo bảo mật');