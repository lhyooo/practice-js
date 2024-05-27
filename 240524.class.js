_inside = [{"팥" : 500}, {"슈크림" : 1000}]
_cooked_degree = [{"촉촉" : 100}, {"중간" : 200}, {"바삭" : 300}]

class _boog { // 붕어빵이라는 클래스

    // 프로퍼티(속성) -> 클래스 안에 선언하면 객체는 이 속성을 갖게 됨
    _name; // 이름
    _inside; // 내용물
    _cooked_degree; // 익힘 정도
    
    // 생성자(클래스에서 새로운 인스턴트(객체) 만듦)
    _constructor(_name, _inside, _cooked_degree) {
        this._name = _name;
        this._inside = _inside;
        this._cooked_degree = _cooked_degree;
    }

    _introduce(){ // 클래스 내 메서드
        return `안녕하세요 저는 ${this._name}입니당.`;
    }
    
    _price(){
        let _result = 0;
        this._inside === "팥" ? (_result += 500) : (_result += 1000);
        // '?' 연산자 -> 조건에 따라 다른 값 할당 <변수 = 조건 ? 값1 : 값2 >

        if (this._cooked_degree === "촉촉") {
            _result += 100;
        } else if (this._cooked_degree == "중간") {
            _result += 200;
        } else {
            _result += 300;
        }

        return `총 ${_result}원 입니당.`;
    }
}

const _boogbread1 = new _boog("귀여운붕어", "팥", "바삭")
console.log(_boogbread1._introduce());
console.log(_boogbread1._price());