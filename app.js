class Subject {
  constructor(){
     this.subscribers = new Array();
  }

  subscribe (onPublish){
    this.subscribers.push(onPublish);
  }


  publish (sometext){
    this.subscribers.forEach(function(subscriber) {
        subscriber(sometext);
    });
  }

  unsubscribe (unPublish){
    for (var i = 0; i < this.subscribers.length; i++) {
        if (this.subscribers[i] == unPublish){
          this.subscribers.splice(i, 1);
        }
    }
  }
}

//Блоггеры
var andrey = new Subject();
var monika = new Subject();

//Подписчики
var Sasha = {
    tell: (news) => {
        console.log('ОО! ТЫ слышал о ' + news);
    }
};

var Masha = {
    think: (news) => {
        console.log('Я думаю о ' + news);
    }
};

var Kira = {
  hello: (news) => {
    console.log("Я подписалась")
  }
}

var Kolia = {
  hey: (news) => {
    console.log("Я подписался на новые новости")
  }
}


andrey.subscribe(Sasha.tell);
andrey.subscribe(Kira.hello);
andrey.subscribe(Kolia.hey);
andrey.subscribe(Masha.think);
monika.subscribe(Masha.think);

andrey.unsubscribe(Kolia.hey);


andrey.publish('Последняя новость!');
monika.publish("Хорошая новость!");

console.log(andrey.subscribers);
