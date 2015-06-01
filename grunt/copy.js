module.exports = {
    angular: {
        files: [
            {expand: true, src: "**", cwd: 'bower_components/flot',         dest: "public/bower_components/flot"},
            {expand: true, src: "**", cwd: 'bower_components/flot.tooltip',         dest: "public/bower_components/flot.tooltip"},
            {expand: true, src: "**", cwd: 'bower_components/flot.orderbars',         dest: "public/bower_components/flot.orderbars"},
            {expand: true, src: "**", cwd: 'bower_components/flot-spline',         dest: "public/bower_components/flot-spline"},

            {expand: true, src: "**", cwd: 'bower_components/bootstrap/fonts',         dest: "public/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/font-awesome/fonts',      dest: "public/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/Simple-Line-Icons/fonts', dest: "public/fonts"},
            {expand: true, src: "**", cwd: 'public_src/fonts',   dest: "public/fonts"},
            {expand: true, src: "**", cwd: 'public_src/api',     dest: "public/api"},
            {expand: true, src: "**", cwd: 'public_src/l10n',    dest: "public/l10n"},
            {expand: true, src: "**", cwd: 'public_src/img',     dest: "public/img"},
            {expand: true, src: "**", cwd: 'public_src/js',      dest: "public/js"},
            {expand: true, src: "**", cwd: 'public_src/tpl',     dest: "public/tpl"},
            {src: 'public_src/index.min.html', dest : 'public/index.html'},
            {src: 'public_src/favicon.ico', dest : 'public/favicon.ico'},
            {src: 'public_src/robots.txt', dest : 'public/robots.txt'}

        ]
    }

};
