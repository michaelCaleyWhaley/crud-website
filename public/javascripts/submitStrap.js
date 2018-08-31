
DomReady.ready(function () {
    (function () {
        var strapForm = document.getElementById('strap-form');
        var strapInput = document.getElementById('strap-input');
        var oldNote = document.getElementById('old-note');
        var newNote = document.getElementById('new-note');

        function makeHttpRequest(value) {
            var request = new XMLHttpRequest();
            request.open('POST', '/update');
            request.setRequestHeader('Content-type', 'application/json');
            request.send(JSON.stringify({ "text": value }));
        }

        function resetText() {
            oldNote.innerHTML = newNote.innerHTML;
            oldNote.style.opacity = 1;
            newNote.style.opacity = 0;
        }

        strapForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (strapInput.value !== "") {
                makeHttpRequest(strapInput.value);
                newNote.innerHTML = strapInput.value;
                strapInput.value = "";
                oldNote.style.opacity = 0;
                newNote.style.opacity = 1;

                setTimeout(function(){
                    resetText();
                }, 300);

            }
        });

    })();
});