

(function(){
    var target = document.getElementById( 'js-counter' );

    var count = 0;
    
    function increment() {
         target.innerHTML = '<p> Counter: ' + ++count + '</p>';   
    }
    
    setInterval( increment, 1000 );
})();


(function(){
    var target = document.getElementById( 'react-counter' );

    var count = 0;
    
    function increment() {
        ReactDOM.render(
            <p>Counter: { ++count }</p>,
            target
        );
    }
    
    setInterval( increment, 1000 );
})();