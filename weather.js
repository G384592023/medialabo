let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let dp = document.querySelector('div#result')

let p = document.createElement('li');
p.textContent = '世界の天気(検索結果2件)';
let u = document.createElement('ul');
u.insertAdjacentElement('beforeend', p);
dp.insertAdjacentElement('beforeend', u);

let p1 = document.createElement('li');
p1.textContent = '検索結果1件目';
let u1 = document.createElement('ul');
u.insertAdjacentElement('beforeend', u1);
u1.insertAdjacentElement('beforeend', p1);


let p2 = document.createElement('li');
p2.textContent = ('都市名:' + data.name);
let u2 = document.createElement('ul');
u.insertAdjacentElement('beforeend', u1);
u1.insertAdjacentElement('beforeend', u2);
u2.insertAdjacentElement('beforeend', p2); 

let p3 = document.createElement('li');
p3.textContent = ('天気:' + data.weather[0].description);
u.insertAdjacentElement('beforeend', u1);
u1.insertAdjacentElement('beforeend', u2);
u2.insertAdjacentElement('beforeend', p3); 

let p4 = document.createElement('li');
p4.textContent = ('最高気温:' + data.main.temp_max);
u.insertAdjacentElement('beforeend', u1);
u1.insertAdjacentElement('beforeend', u2);
u2.insertAdjacentElement('beforeend', p4);

let p5 = document.createElement('li');
p5.textContent = ('最低気温:' + data.main.temp_min);
u.insertAdjacentElement('beforeend', u1);
u1.insertAdjacentElement('beforeend', u2);
u2.insertAdjacentElement('beforeend', p5);

let p6 = document.createElement('li');
p6.textContent = ('湿度:' + data.main.humidity);
u.insertAdjacentElement('beforeend', u1);
u1.insertAdjacentElement('beforeend', u2);
u2.insertAdjacentElement('beforeend', p6);

let p7 = document.createElement('li');
p7.textContent = ('風速:' + data.wind.speed);
u.insertAdjacentElement('beforeend', u1);
u1.insertAdjacentElement('beforeend', u2);
u2.insertAdjacentElement('beforeend', p7);

let p8 = document.createElement('li');
p8.textContent = ('風向:' + data.wind.deg);
u.insertAdjacentElement('beforeend', u1);
u1.insertAdjacentElement('beforeend', u2);
u2.insertAdjacentElement('beforeend', p8);