const axios = require('axios');
var ProgressBar = require('progress');
 


const getElect = async () => {
    var bar = new ProgressBar('선거 정보를 수집하는 중… ( :total / :current )', { total: 254 });
    const _mapping = {"1100":"서울특별시","2600":"부산광역시","2700":"대구광역시","2800":"인천광역시","2900":"광주광역시","3000":"대전광역시","3100":"울산광역시","4100":"경기도","4300":"충청북도","4400":"충청남도","4600":"전라남도","4700":"경상북도","4800":"경상남도","4900":"제주특별자치도","5100":"세종특별자치시","5200":"강원특별자치도","5300":"전북특별자치도"}
    const _ss = { '01': 0, '02': 0, '03': 0, '04': 0, '05': 0, '06': 0, '07': 0, '08': 0, '09': 0, '10': 0, '11': 0 }
    for(const _code of Object.keys(_mapping)) {
        const _result = await axios.post('http://info.nec.go.kr/m/bizcommon/selectbox/selectbox_getSggCityCodeJson.json', `getParams=%5Bobject+Object%5D&getParamsToStr=&setParam=undefined&logParams=undefined&electionId=0020240410&secondMenuId=VCCP09&electionCode=2&cityCode=${ _code }&statementId=VCCP09_%232`)
        for(const _smallMap of _result.data.jsonResult.body) {
        const __result = await axios.post('http://info.nec.go.kr/m/electioninfo/electionInfo_report.json', `electionId=0020240410&secondMenuId=VCCP09&electionCode=2&cityCode=${ _code }&sggCityCode=${ _smallMap.CODE }&statementId=VCCP09_#2`)
            const _res = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'].map(_ekd => { return Number(__result.data.jsonResult.body[0][`DUGSU${_ekd}`].replaceAll(',', '')) })
            _ss[['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'].find(_ekd => { return Number(__result.data.jsonResult.body[0][`DUGSU${_ekd}`].replaceAll(',', '')) == Math.max(_res) && Math.max(_res) !== 0 })]++
            bar.tick()
        }
    }
    const today = new Date()
    console.log('')
    console.log('')
    console.log('')
    console.log(`더불어민주당: ${_ss['01']} | 국민의힘: ${_ss['02']} | 기타 및 무소속: ${Object.values(_ss).filter(_e => _e >= 0).reduce((a, b) => a + b, 0) - _ss['01'] - _ss['02']} | 미개표: ${ 254 - Object.values(_ss).filter(_e => _e >= 0).reduce((a, b) => a + b, 0) }`)
    console.log(today.getFullYear() + '년 ' + (today.getMonth()+1) + '월 '
    + today.getDate() + '일 '
    + today.getHours() + '시 ' + today.getMinutes() + '분 '
    + today.getSeconds() + '초')
    setTimeout(getElect, 120000)
}
setTimeout(getElect, 1000)