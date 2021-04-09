const inlineCss = require('gulp-inline-css');

const styles = () => {
    return gulp.src('source/*.html') // Путь, где лежат html-файлы, которые нужно инлайнить
       .pipe(inlineCss({
        removeHtmlSelectors: true
       })) // Вызов функции
       .pipe(gulp.dest('build/')); // Путь, куда будет положен результат
};

exports.styles = styles;
