function onclickHandler() {
    console.log('onclickHandler called');
    // alert('onclickHandler called');

    const content = document.getElementById('content');
    content.append("hello");

    // https://wiki.selfhtml.org/wiki/JavaScript/DOM/Node
    // content.textContent = 'hello';
    // content.innerText = 'hi';
    // content.innerHTML = '<strong>strong?</strong>';
}
