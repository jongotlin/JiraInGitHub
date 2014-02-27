var title = $('.js-issue-title').text();
var result = title.replace(/\ZOO-"?(\d+)"?/gi, '<a href="http://zoozoo.atlassian.net/browse/ZOO-$1">ZOO-$1</a>');

$('.js-issue-title').html(result);

