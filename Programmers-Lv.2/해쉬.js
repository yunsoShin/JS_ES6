class HashTable {
    constructor() {
      this.table = {};
    }
  
    // 해시 함수를 정의하여 키를 해시 값으로 변환
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % 101;
      }
      return hash;
    }
  
    // 키-값 쌍을 저장
    set(key, value) {
      const hash = this._hash(key);
      this.table[hash] = value;
    }
  
    // 키를 사용하여 값을 검색
    get(key) {
      const hash = this._hash(key);
      return this.table[hash];
    }
  
    // 키를 사용하여 해시 테이블에서 값을 제거
    remove(key) {
      const hash = this._hash(key);
      delete this.table[hash];
    }
  }
  
  // 해시 테이블 사용 예제
  const myHashTable = new HashTable();
  myHashTable.set('name', 'John');
  myHashTable.set('age', 30);
  
  console.log(myHashTable.get('name')); // 출력: John
  console.log(myHashTable.get('age')); // 출력: 30
  
  myHashTable.remove('age');
  console.log(myHashTable.get('age')); // 출력: undefined
  