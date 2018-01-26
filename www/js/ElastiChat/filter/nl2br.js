elastiChat.filter('nl2br', function() {
        return function(data) {
            if (!data) return data;
            return data.replace(/\n\r?/g, '<br />');
        };
});