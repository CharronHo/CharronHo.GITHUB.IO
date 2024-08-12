document.addEventListener('DOMContentLoaded', (event) => {
    // 示例：打印欢迎信息
    console.log("欢迎来到我的个人博客！");

    // 示例：点击事件
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.addEventListener('click', () => {
            alert('你点击了一个博客文章！');
        });
    });
});
