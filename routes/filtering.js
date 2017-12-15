var filter=function(data,res) {
    for (i in data) {
        if ((i === "'") || (i === '"') || (i === '\\') || (i === '{') || (i === '}') || (i === ';'))
            res.render('404.html');
    }
};

module.exports =filter;