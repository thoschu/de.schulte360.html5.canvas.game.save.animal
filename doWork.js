/**
 * Created by ANONYMOUS on 04.11.2017.
 */
self.addEventListener('message', function(e) {
    console.info(e.data);






    self.postMessage(e.data);
}, false);