 

简要教程
natural-gallery-js是一款支持无限加载的js图片画廊插件。该js图片画廊支持图片的懒加载，可以对图片进行搜索，分类，还可以以轮播图的方式来展示和切换图片。

## 使用方法
在页面中引入下面的CSS和js文件。

```html
<link rel="stylesheet" href="../dist/themes/natural.css">
<link rel="stylesheet" href="../dist/natural-gallery.full.css">
<script src="../dist/natural-gallery.full.js" defer></script>
```


## HTML结构
使用一个<div>作为图片画廊的容器。
```html
<div id="myGallery""></div>
```

然后添加PhotoSwipe轮播图模板。
```html
<div class="myPhotoswipe" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                        <div class="pswp__preloader__cut">
                            <div class="pswp__preloader__donut"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
        </div>
    </div>
</div>
```


以及下面的一些操作图标。

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100"  xml:space="preserve" style="display:none;">
    <g id="icon-search">
        <path d="M67.647,61.054c1.74-1.741,3.046-3.706,3.916-5.896c0.87-2.19,1.305-4.422,1.305-6.696c0-2.274-0.435-4.52-1.305-6.738
            c-0.87-2.218-2.176-4.197-3.916-5.938c-1.741-1.741-3.706-3.032-5.896-3.874c-2.19-0.842-4.436-1.263-6.738-1.263
            c-2.302,0-4.549,0.421-6.738,1.263c-2.19,0.842-4.155,2.134-5.896,3.874s-3.046,3.72-3.916,5.938
            c-0.87,2.218-1.305,4.464-1.305,6.738c0,2.274,0.435,4.506,1.305,6.696c0.87,2.19,2.176,4.155,3.916,5.896
            c1.741,1.74,3.706,3.046,5.896,3.916c2.19,0.87,4.436,1.305,6.738,1.305s4.548-0.435,6.738-1.305
            C63.941,64.1,65.906,62.794,67.647,61.054z M77.754,25.679c3.145,3.144,5.503,6.696,7.075,10.654
            c1.572,3.959,2.358,7.987,2.358,12.086s-0.786,8.128-2.358,12.086c-1.572,3.959-3.93,7.51-7.075,10.654
            c-2.526,2.527-5.334,4.548-8.422,6.064c-3.088,1.516-6.288,2.526-9.602,3.032c-3.313,0.506-6.64,0.478-9.98-0.084
            c-3.341-0.562-6.528-1.628-9.56-3.201L25.703,91.459c-0.842,0.842-1.769,1.459-2.779,1.853c-1.011,0.393-2.064,0.59-3.158,0.59
            s-2.148-0.197-3.158-0.59c-1.011-0.393-1.937-1.011-2.779-1.853c-0.842-0.842-1.46-1.769-1.853-2.779
            c-0.393-1.011-0.59-2.064-0.59-3.158s0.197-2.147,0.59-3.158c0.393-1.011,1.011-1.937,1.853-2.779l13.981-13.981
            c-1.965-3.088-3.341-6.401-4.127-9.939c-0.786-3.538-0.997-7.075-0.632-10.612c0.365-3.537,1.32-6.977,2.864-10.318
            c1.544-3.341,3.664-6.359,6.359-9.054c3.144-3.088,6.696-5.418,10.654-6.991c3.959-1.572,7.987-2.358,12.086-2.358
            c4.099,0,8.128,0.786,12.086,2.358C71.058,20.261,74.61,22.591,77.754,25.679z"/>
    </g>
    <g id="icon-next">
        <polygon points="88.126,24.216 50.036,62.306 11.947,24.216 0.355,35.809 50.036,85.49 99.718,35.809       "/>
    </g>
    <g id="icon-category">
        <path d="M98.929,28.421L87.854,17.346c-1.311-1.311-3.436-1.311-4.747,0L36.974,63.48L17.353,43.859
            c-1.31-1.311-3.436-1.311-4.746,0L1.532,54.933c-1.311,1.31-1.311,3.436,0,4.747l33.069,33.069
            c0.655,0.656,1.514,0.983,2.373,0.983c0.859,0,1.718-0.328,2.373-0.983l59.581-59.582c0.63-0.629,0.983-1.483,0.983-2.373
            C99.912,29.904,99.559,29.05,98.929,28.421z"/>
    </g>
    <g id="icon-pict">
        <path d="M8.603,16.406v77.478H91.47V16.406H8.603z M82.018,26.091V72.5l-14.65-17.355L54.369,66.581L36.093,44.649L18.055,69.808
            V26.091H82.018z"/>
        <path d="M60.643,46.263c3.655,0,6.617-3.034,6.617-6.774c0-3.744-2.962-6.779-6.617-6.779c-3.654,0-6.617,3.035-6.617,6.779
            C54.026,43.228,56.989,46.263,60.643,46.263z"/>
    </g>
    <g id="icon-noresults">
        <path d="M99.912,6.908L6.821,100l-5.812-5.812L94.1,1.096L99.912,6.908z M68.442,8.462L5.237,71.349V8.462H68.442z M35.174,27.716
            c0-6.075-4.925-10.999-10.999-10.999c-6.129,0-10.999,4.988-10.999,10.999c0,6.012,4.87,10.999,10.999,10.999
            C30.25,38.716,35.174,33.791,35.174,27.716z M88.514,82.787c-3.364,0-25.162,0-28.576,0l-5.895-11.473l-6.014,5.984l2.738,5.489
            c-0.846,0-2.921,0-8.254,0l-9.896,9.847h63.07V29.881L73.257,52.198C78.41,62.531,88.123,82.004,88.514,82.787z"/>
    </g>
</svg>
```


 初始化插件
最后通过下面的js代码来初始化该图片画廊插件。
```js
var containerRef = document.getElementById('myGallery'); // uses HTMLElement reference as container
var photoswipeRef = document.getElementById('myPhotoswipe'); // photoswipe template if required
 
// Create your gallery options
var options = {
 
    format: 'natural | square',
 
    // Max row height. Works for both natural and square format. Prefer this option for a "responsive" approach
    rowHeight: 350,
 
    // Only for square format. Disables responsive
    imagesPerRow: 4,
 
    round: 3, // Rounded corner
    margin: 3, // Gap between thumbnails
    limit: 0, // Number of rows, activate pagination (disables infinite scroll)
    minRowsAtStart: 2, // Initial number of rows. If null, gallery tries to define the number of required rows to fill the viewport.
 
    showLabels: 'hover | always | never', // When to show the labels in thumbnails
 
    lightbox: true, // Open a lightbox with a bigger image -> activate a zoom effect on hover on thumbnails
    zoomRotation: true,
 
    // Number of pixels to offset the infinite scroll autoload
    // If negative, next rows will load before the bottom of gallery container is visible
    // If 0 the next rows will load when the bottom of the gallery will be visible
    // If positive, the next rows will load when the bottom of the gallery will be this amount above the end of the viewport.
    // If positive be sure to always have this number of pixels as margin, padding or more content after the gallery.
    infiniteScrollOffset: 0,
 
    // Header / Search options.
    showCount: false,
    searchFilter: false,
    categoriesFilter: false,
    showNone: false,
    showOthers: false,
    labelCategories: 'Category',
    labelNone: 'None',
    labelOthers: 'Others',
    labelSearch: 'Search',
    labelImages: 'Images',
};
 
var images  = [
    {
        "thumbnail": "thumb.jpg",
        "enlarged": "big.jpg",
        "title": "Antonio Ron",
        "categories": [
            {
                "id": 4,
                "title": "Nature",
                "photo_count": 41787,
                "links": {
                    "self": "https://api.unsplash.com/categories/4",
                    "photos": "https://api.unsplash.com/categories/4/photos"
                }
            }
        ],
        "tWidth": 443.74009508716324,
        "tHeight": 300,
        "eWidth": 2800,
        "eHeight": 1893
    },
    {...}
];
 
 
// Create a gallery
var gallery = new Gallery(containerRef, photoswipeRef, options);    

```


http://www.htmleaf.com/jQuery/Image-Effects/201807065212.html

 该支持无限加载的js图片画廊插件的github地址为：https://github.com/Ecodev/natural-gallery-js