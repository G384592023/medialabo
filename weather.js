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

let dq = document.querySelector('div#first')
let p = document.createElement('p');
p.textContent = '世界の天気(検索結果2件)';
dq.insertAdjacentElement('beforeend', p);

let b1 = document.querySelector('button#btn');
b1.addEventListener('click', showSelectResult);
let key = 0;
function showSelectResult() {
  let s = document.querySelector('select#name');
  let idx = s.selectedIndex;  // idx 番目の option が選択された

  let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o = os.item(idx);       // os の idx 番目の要素
  console.log('検索キー:' + o.getAttribute('value'));  // id 属性を表示
  key = Number(o.getAttribute('value'));

  let cs = document.querySelectorAll('input[name="tenki"]');
  let checkedGenres = [];
  for (let c of cs) {
    if (c.checked) {
      checkedGenres.push(c.value);
      console.log('ジャンル:' + c.value);

    }
  }

  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + key + '.json';
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}
let na;
function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
  na=data.name;
  console.log(data.name);
  // data をコンソールに出力
  processData(data);
}
function processData(data) {
  let w = document.querySelectorAll('li')
for(let n of w){
	n.remove();
}
  let dp = document.querySelector('div#result')
  let u1 = document.createElement('ul');
  dp.appendChild(u1);

  let p1 = document.createElement('li');
  p1.textContent = '検索結果';
  let u2 = document.createElement('ul');
  u1.insertAdjacentElement('beforeend', u2);
  u2.insertAdjacentElement('beforeend', p1); 

  let p2 = document.createElement('li');
  p2.textContent = ('都市名:' + data.name);
  u2.insertAdjacentElement('beforeend', p2); 

  let cs = document.querySelectorAll('input[name="tenki"]');
  for (let genre of cs) {
    if (genre.checked) {
      switch (genre.value) {
        case 'weather[0].description':
          let p3 = document.createElement('li');
          p3.textContent = ('天気:' + data.weather[0].description);
          u2.insertAdjacentElement('beforeend', p3); 
          break;
        case 'main.temp_max':
          let p4 = document.createElement('li');
          p4.textContent = ('最高気温:' + data.main.temp_max);
          u2.insertAdjacentElement('beforeend', p4);
          break;
        case 'main.temp_min':
          let p5 = document.createElement('li');
          p5.textContent = ('最低気温:' + data.main.temp_min);
          u2.insertAdjacentElement('beforeend', p5);
          break;
        case 'main.humidity':
          let p6 = document.createElement('li');
          p6.textContent = ('湿度:' + data.main.humidity);
          u2.insertAdjacentElement('beforeend', p6);
          break;
        case 'wind.speed':
          let p7 = document.createElement('li');
          p7.textContent = ('風速:' + data.wind.speed);
          u2.insertAdjacentElement('beforeend', p7);
          break;
        case 'wind.deg':
          let p8 = document.createElement('li');
          p8.textContent = ('風向:' + data.wind.deg);
          u2.insertAdjacentElement('beforeend', p8);
          break;
        default:
          console.log('選択されたジャンルに対応するデータがありません');
      }
    }
  }
}
function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}