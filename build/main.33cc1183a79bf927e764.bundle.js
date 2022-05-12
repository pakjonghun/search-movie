/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Routes.tsx":
/*!************************!*\
  !*** ./src/Routes.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/Home */ "./src/pages/Home/index.tsx");




const Routers = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routers);

/***/ }),

/***/ "./src/axiosInstance/constants.ts":
/*!****************************************!*\
  !*** ./src/axiosInstance/constants.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseURL": () => (/* binding */ baseURL)
/* harmony export */ });
const baseURL = 'https://api.themoviedb.org/3';

/***/ }),

/***/ "./src/axiosInstance/index.ts":
/*!************************************!*\
  !*** ./src/axiosInstance/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "http": () => (/* binding */ http)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/axiosInstance/constants.ts");


const config = {
  baseURL: _constants__WEBPACK_IMPORTED_MODULE_1__.baseURL // headers: {
  //   'Cache-Control': 'no-cache',
  // },

};
const http = axios__WEBPACK_IMPORTED_MODULE_0___default().create(config);

/***/ }),

/***/ "./src/components/ErrorBoundary.tsx":
/*!******************************************!*\
  !*** ./src/components/ErrorBoundary.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(_) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Errors");
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

/***/ }),

/***/ "./src/components/MainLayout/Navigation.tsx":
/*!**************************************************!*\
  !*** ./src/components/MainLayout/Navigation.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_styleUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/styleUtil */ "./src/utils/styleUtil.ts");



const Navigation = ({
  title,
  canBack
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: (0,_utils_styleUtil__WEBPACK_IMPORTED_MODULE_1__.joinClass)('sticky top-0 grid p-3 bg-gray-800 text-gray-50 shadow-md', canBack ? 'grid-cols-3' : '')
  }, canBack && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "w-fit scale-md"
  }, "\u2190 back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-center font-medium first-letter:uppercase"
  }, title));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./src/components/MainLayout/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/MainLayout/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ "./src/components/MainLayout/Navigation.tsx");



const MainLayout = ({
  title,
  canBack = false,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "max-w-screen-lg mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    canBack: canBack
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "px-5 py-3 space-y-5"
  }, children));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainLayout);

/***/ }),

/***/ "./src/components/RadioButton/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/RadioButton/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const RadioButton = ({
  name,
  id,
  value,
  indicator,
  classes
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: id,
    className: classes ? classes : ''
  }, indicator, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    name: name,
    id: id,
    value: value,
    className: "hidden"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioButton);

/***/ }),

/***/ "./src/components/VirtualizedItem/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/VirtualizedItem/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_styleUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/styleUtil */ "./src/utils/styleUtil.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const VirtualizedItem = ({
  children,
  height,
  offset = 0,
  classes
}) => {
  const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [itemRef, setItemRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (itemRef) {
      const options = {
        root: null,
        rootMargin: `${offset}px 0px ${offset}px 0px`,
        threshold: 0
      };

      const cb = entries => {
        const isIntersecting = entries[0].isIntersecting;

        if (typeof window !== undefined && window.requestIdleCallback) {
          window.requestIdleCallback(() => setIsVisible(isIntersecting), {
            timeout: 500
          });
        } else {
          setIsVisible(isIntersecting);
        }
      };

      const observer = new IntersectionObserver(cb, options);
      observer.observe(itemRef);
    }
  }, [itemRef, offset]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: (0,_utils_styleUtil__WEBPACK_IMPORTED_MODULE_0__.joinClass)(classes ? classes : ''),
    ref: setItemRef
  }, isVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      height
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VirtualizedItem);

/***/ }),

/***/ "./src/hooks/useFetchMoreMovies.ts":
/*!*****************************************!*\
  !*** ./src/hooks/useFetchMoreMovies.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _recoil_atoms_movieAtom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recoil/atoms/movieAtom */ "./src/recoil/atoms/movieAtom.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");



const useFetchMoreMovies = () => {
  const setCursor = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_recoil_atoms_movieAtom__WEBPACK_IMPORTED_MODULE_0__.movieCursor);
  return () => setCursor(cursor => cursor + 1);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFetchMoreMovies);

/***/ }),

/***/ "./src/hooks/useInfinityScroll.ts":
/*!****************************************!*\
  !*** ./src/hooks/useInfinityScroll.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInfinityScroll = ({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  callback
}) => {
  const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const setRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(ele => {
    if (ele) setTarget(ele);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!target) return;
    const options = {
      root,
      rootMargin,
      threshold
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
    return () => observer.disconnect();
  }, [target, root, rootMargin, threshold, callback]);
  return setRef;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfinityScroll);

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Routes */ "./src/Routes.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _style_loader_css_loader_react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !style-loader!css-loader!react-toastify/dist/ReactToastify.css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");







const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recoil__WEBPACK_IMPORTED_MODULE_6__.RecoilRoot, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "asdfasdfsdf")
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Routes__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {
  position: "top-right"
})))));

/***/ }),

/***/ "./src/pages/Home/Content/ContentByGenres/ContentByGenre.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Home/Content/ContentByGenres/ContentByGenre.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recoil_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @recoil/atoms/selectionAtom */ "./src/recoil/atoms/selectionAtom.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");




const ContentByGenres = ({
  genres
}) => {
  const {
    title,
    image,
    ids
  } = genres;
  const setGenres = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_recoil_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_1__.selectedGenreState);
  const onContentClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setGenres(ids);
  }, [ids, setGenres]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: onContentClick,
    className: "flex space-x-2 h-20  bg-gray-50 shadow-md border-[1px] rounded-md scale-md overflow-hidden cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: image,
    width: '30%',
    alt: "top"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 px-2 py-1 space-y-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-gray-800 font-bold"
  }, title)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentByGenres);

/***/ }),

/***/ "./src/pages/Home/Content/ContentByGenres/index.tsx":
/*!**********************************************************!*\
  !*** ./src/pages/Home/Content/ContentByGenres/index.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Home_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/Home/constants */ "./src/pages/Home/constants.ts");
/* harmony import */ var _ContentByGenre__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentByGenre */ "./src/pages/Home/Content/ContentByGenres/ContentByGenre.tsx");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @recoil/atoms/selectionAtom */ "./src/recoil/atoms/selectionAtom.ts");
/* harmony import */ var _MovieContents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MovieContents */ "./src/pages/Home/Content/MovieContents/index.tsx");
/* harmony import */ var _recoil_selectors_selectionSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @recoil/selectors/selectionSelector */ "./src/recoil/selectors/selectionSelector.ts");








const ContentByGenres = () => {
  const [genres, setGenres] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_recoil_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_4__.selectedGenreState);
  const genresMovies = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_recoil_selectors_selectionSelector__WEBPACK_IMPORTED_MODULE_6__.getMovieByGenre);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => setGenres([]);
  }, [setGenres]);
  const onBackClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setGenres([]);
  }, [setGenres]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-2 py-1 space-y-3"
  }, !!genres.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-right sticky top-0 z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "py-1 px-3 mr-3 text-sm hover:bg-blue-500 hover:text-blue-50 rounded-md shadow-md bg-gray-100 font-medium scale-md text-gray-500 z-20",
    onClick: onBackClick
  }, "Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MovieContents__WEBPACK_IMPORTED_MODULE_5__["default"], {
    movies: genresMovies
  })), !genres.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, _pages_Home_constants__WEBPACK_IMPORTED_MODULE_1__.genreSelector.map(genre => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentByGenre__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: genre.title,
    genres: genre
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentByGenres);

/***/ }),

/***/ "./src/pages/Home/Content/ContentByPopularities/ContentByPopularity.tsx":
/*!******************************************************************************!*\
  !*** ./src/pages/Home/Content/ContentByPopularities/ContentByPopularity.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recoil_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @recoil/atoms/selectionAtom */ "./src/recoil/atoms/selectionAtom.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");




const ContentByPopularity = ({
  popularity
}) => {
  const {
    title,
    description,
    image,
    subTitle
  } = popularity;
  const setSelectorPopularity = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_recoil_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_1__.selectedPopularityState);
  const onPopularityClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const popularities = subTitle.split('~').map(v => +v);
    setSelectorPopularity(popularities);
  }, [subTitle, setSelectorPopularity]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: onPopularityClick,
    className: "flex space-x-2 h-32  bg-gray-50 shadow-md border-[1px] rounded-md scale-md overflow-hidden cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: image,
    width: '30%',
    alt: "top"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 px-2 py-1 space-y-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-gray-800 font-bold"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "mr-3 text-gray-500 text-sm font-medium"
  }, subTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-gray-600 text-sm"
  }, description)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentByPopularity);

/***/ }),

/***/ "./src/pages/Home/Content/ContentByPopularities/index.tsx":
/*!****************************************************************!*\
  !*** ./src/pages/Home/Content/ContentByPopularities/index.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Home_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/Home/constants */ "./src/pages/Home/constants.ts");
/* harmony import */ var _ContentByPopularity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentByPopularity */ "./src/pages/Home/Content/ContentByPopularities/ContentByPopularity.tsx");
/* harmony import */ var _recoil_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @recoil/atoms/selectionAtom */ "./src/recoil/atoms/selectionAtom.ts");
/* harmony import */ var _recoil_selectors_selectionSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @recoil/selectors/selectionSelector */ "./src/recoil/selectors/selectionSelector.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _MovieContents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MovieContents */ "./src/pages/Home/Content/MovieContents/index.tsx");








const ContentByPopularities = () => {
  const [popularities, setPopularities] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_recoil_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_3__.selectedPopularityState);
  const popularitiesMovies = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_recoil_selectors_selectionSelector__WEBPACK_IMPORTED_MODULE_4__.getMovieByPopularity);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => setPopularities([0, 0]);
  }, [setPopularities]);
  const onBackClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setPopularities([0, 0]);
  }, [setPopularities]);
  const isSelected = !popularities.every(v => !v);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-2 py-1 space-y-3"
  }, !!isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-right sticky top-0 z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "py-1 px-3 mr-3 text-sm hover:bg-blue-500 hover:text-blue-50 rounded-md shadow-md bg-gray-100 font-medium scale-md text-gray-500 z-20",
    onClick: onBackClick
  }, "Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MovieContents__WEBPACK_IMPORTED_MODULE_6__["default"], {
    movies: popularitiesMovies
  })), !isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, _pages_Home_constants__WEBPACK_IMPORTED_MODULE_1__.popularitySelector.map(popularity => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentByPopularity__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: popularity.subTitle,
    popularity: popularity
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentByPopularities);

/***/ }),

/***/ "./src/pages/Home/Content/MovieContents/MovieContent.tsx":
/*!***************************************************************!*\
  !*** ./src/pages/Home/Content/MovieContents/MovieContent.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_styleUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/styleUtil */ "./src/utils/styleUtil.ts");
/* harmony import */ var _hooks_useFetchMoreMovies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hooks/useFetchMoreMovies */ "./src/hooks/useFetchMoreMovies.ts");
/* harmony import */ var _hooks_useInfinityScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hooks/useInfinityScroll */ "./src/hooks/useInfinityScroll.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_selectors_movieSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @recoil/selectors/movieSelector */ "./src/recoil/selectors/movieSelector.ts");







const MovieContent = ({
  movie,
  nth
}) => {
  const {
    poster_path,
    vote_average,
    overview,
    title,
    release_date
  } = movie;
  const totalMovieCount = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_recoil_selectors_movieSelector__WEBPACK_IMPORTED_MODULE_5__.getTotalMoviesCount);
  const fetchMoreMovies = (0,_hooks_useFetchMoreMovies__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const callback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        fetchMoreMovies();
      }
    });
  }, [fetchMoreMovies]);
  const setRef = (0,_hooks_useInfinityScroll__WEBPACK_IMPORTED_MODULE_3__["default"])({
    callback
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex space-x-2  bg-gray-50 shadow-md h-40 border-[1px] rounded-md scale-md overflow-hidden cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "h-full",
    src: (0,_utils_styleUtil__WEBPACK_IMPORTED_MODULE_1__.imgUrlMaker)(poster_path),
    alt: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 px-2 py-1 space-y-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-gray-800 font-bold"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "mr-3 text-gray-500 text-sm font-medium"
  }, release_date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-gray-500 text-sm font-medium"
  }, vote_average), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-gray-600 text-sm"
  }, overview === null || overview === void 0 ? void 0 : overview.substring(0, 150), "...")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieContent);

/***/ }),

/***/ "./src/pages/Home/Content/MovieContents/MovieContents.tsx":
/*!****************************************************************!*\
  !*** ./src/pages/Home/Content/MovieContents/MovieContents.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _MovieContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieContent */ "./src/pages/Home/Content/MovieContents/MovieContent.tsx");
/* harmony import */ var _components_VirtualizedItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/VirtualizedItem */ "./src/components/VirtualizedItem/index.tsx");





const MovieContents = ({
  movies,
  cursor
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, movies.map((movie, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_VirtualizedItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    classes: "px-3 py-1",
    offset: 1000,
    height: 160
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MovieContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    nth: (index + 1) * cursor,
    movie: movie
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieContents);

/***/ }),

/***/ "./src/pages/Home/Content/MovieContents/index.tsx":
/*!********************************************************!*\
  !*** ./src/pages/Home/Content/MovieContents/index.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_selectors_movieSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @recoil/selectors/movieSelector */ "./src/recoil/selectors/movieSelector.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _MovieContents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MovieContents */ "./src/pages/Home/Content/MovieContents/MovieContents.tsx");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/ErrorBoundary */ "./src/components/ErrorBoundary.tsx");







const Movies = ({
  movies
}) => {
  const loadableMovies = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_recoil_selectors_movieSelector__WEBPACK_IMPORTED_MODULE_2__.getAllMovies);
  console.log(loadableMovies);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading")
  }, loadableMovies.map((loadableMovie, index) => ({
    hasValue: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MovieContents__WEBPACK_IMPORTED_MODULE_3__["default"], {
      cursor: index + 1,
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      movies: loadableMovie.contents
    }),
    hasError: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])()
    }, "Error"),
    loading: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])()
    }, "Loading")
  })[loadableMovie.state])));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movies);

/***/ }),

/***/ "./src/pages/Home/Content/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/Home/Content/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @recoil/atoms/selectionAtom */ "./src/recoil/atoms/selectionAtom.ts");
/* harmony import */ var _MovieContents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MovieContents */ "./src/pages/Home/Content/MovieContents/index.tsx");
/* harmony import */ var _ContentByGenres__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContentByGenres */ "./src/pages/Home/Content/ContentByGenres/index.tsx");
/* harmony import */ var _ContentByPopularities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContentByPopularities */ "./src/pages/Home/Content/ContentByPopularities/index.tsx");







const Content = () => {
  const contentSelect = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_recoil_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_2__.contentByWhatState);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "relative h-[50vh] space-y-3 overflow-y-auto"
  }, contentSelect === 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MovieContents__WEBPACK_IMPORTED_MODULE_3__["default"], null), contentSelect === 'popularity' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentByPopularities__WEBPACK_IMPORTED_MODULE_5__["default"], null), contentSelect === 'genre' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentByGenres__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/pages/Home/ContentSelector.tsx":
/*!********************************************!*\
  !*** ./src/pages/Home/ContentSelector.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recoil_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @recoil/atoms/selectionAtom */ "./src/recoil/atoms/selectionAtom.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _components_RadioButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/RadioButton */ "./src/components/RadioButton/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/pages/Home/constants.ts");
/* harmony import */ var _utils_styleUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/styleUtil */ "./src/utils/styleUtil.ts");







const ContentSelector = () => {
  const [content, setContent] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_recoil_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_1__.contentByWhatState);
  const onContentSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => {
    setContent(id);
  }, [setContent]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    onChange: e => onContentSelect(e.target.value),
    className: "grid grid-cols-3 justify-center w-fit ml-3 bg-gray-100 rounded-md shadow-md text-gray-700 font-medium text-sm overflow-hidden"
  }, Object.keys(_constants__WEBPACK_IMPORTED_MODULE_4__.contentSelector).map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: key
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_RadioButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    classes: (0,_utils_styleUtil__WEBPACK_IMPORTED_MODULE_5__.joinClass)('block hover:text-gray-50 hover:bg-blue-500 cursor-pointer py-2 px-4', content === key ? 'bg-blue-500 text-blue-50' : ''),
    name: "contentSelector",
    id: key,
    value: key,
    indicator: _constants__WEBPACK_IMPORTED_MODULE_4__.contentSelector[key]
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentSelector);

/***/ }),

/***/ "./src/pages/Home/Filter/ApplyButtons.tsx":
/*!************************************************!*\
  !*** ./src/pages/Home/Filter/ApplyButtons.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @recoil/atoms/filterAtom */ "./src/recoil/atoms/filterAtom.ts");




const ApplyButtons = () => {
  const setIsFilterOpen = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_2__.isFilterOpenState);
  const setIsTvOn = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_2__.isTvOnState);
  const setGenre = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_2__.genreState);
  const setPopularity = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_2__.popularityState);
  const resetFilter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setIsFilterOpen(false);
    setIsTvOn(false);
    setGenre([]);
    setPopularity([]);
  }, [setPopularity, setIsFilterOpen, setIsTvOn, setGenre]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center space-x-3 py-3 mr-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: resetFilter,
    className: "px-5 py-2 bg-gray-200 font-medium text-xs text-gray-800 scale-md rounded-md shadow-md"
  }, "\uCDE8\uC18C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "px-5 py-2 bg-blue-400 font-medium text-xs scale-md text-gray-50 rounded-md shadow-md"
  }, "\uC801\uC6A9"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplyButtons);

/***/ }),

/***/ "./src/pages/Home/Filter/FilterItem.tsx":
/*!**********************************************!*\
  !*** ./src/pages/Home/Filter/FilterItem.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const FilterItem = ({
  filter,
  filterName
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "grid grid-cols-[1.3fr,4fr] py-4 px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "pl-3 font-medium text-gray-800 text-sm"
  }, filterName), filter);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterItem);

/***/ }),

/***/ "./src/pages/Home/Filter/Genre.tsx":
/*!*****************************************!*\
  !*** ./src/pages/Home/Filter/Genre.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @recoil/atoms/filterAtom */ "./src/recoil/atoms/filterAtom.ts");



const genres = ['Action', 'Melo', 'SF', 'Thrill', 'Human', 'Ani'];
const toHangleGenres = ['액션', '멜로', 'SF', '스릴', '감동', '애니'];

const Genre = () => {
  const [genreList, setGenreList] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_2__.genreState);
  const onGenreSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const target = event.target;
    if (target.checked) setGenreList(pre => [...pre, target.value]);else setGenreList(pre => pre.filter(g => g !== target.value));
  }, [setGenreList]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "grid grid-cols-3 gap-x-3 gap-y-2 place-items-start"
  }, genres.map((genre, idx) => {
    const isChecked = genreList.includes(genre);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: genre
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      htmlFor: genre,
      className: "flex items-center space-x-1 cursor-pointer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "relative w-[1rem] aspect-square border-[1px] border-gray-400 bg-gray-50 ring-gray-50"
    }, isChecked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "absolute inset-0 flex items-center justify-center text-xs"
    }, "\u2713") : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-medium text-xs text-gray-500"
    }, toHangleGenres[idx]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      checked: isChecked,
      onChange: onGenreSelect,
      value: genre,
      id: genre,
      type: "checkbox",
      className: "hidden"
    })));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Genre);

/***/ }),

/***/ "./src/pages/Home/Filter/Popularity/Indicator.tsx":
/*!********************************************************!*\
  !*** ./src/pages/Home/Filter/Popularity/Indicator.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @recoil/atoms/filterAtom */ "./src/recoil/atoms/filterAtom.ts");
/* harmony import */ var _recoil_selectors_filterSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @recoil/selectors/filterSelector */ "./src/recoil/selectors/filterSelector.ts");
/* harmony import */ var _utils_styleUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/styleUtil */ "./src/utils/styleUtil.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");






const Indicator = () => {
  const setPopularityList = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_1__.popularityState);
  const [min, max] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_recoil_selectors_filterSelector__WEBPACK_IMPORTED_MODULE_2__.popularityMinMax);
  const onPopularityClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(popularity => {
    setPopularityList(pre => {
      const isInclude = pre.includes(popularity);
      const isFullSelected = pre.length === 2;

      switch (isFullSelected) {
        case true:
          return [];

        default:
          if (isInclude) return pre.filter(p => p !== popularity);else return [...pre, popularity];
      }
    });
  }, [setPopularityList]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex justify-between w-full z-40"
  }, Array.from(Array(10).keys()).map(popularity => {
    const isSelected = max ? min <= popularity + 1 && popularity + 1 <= max : min === popularity + 1 || max === popularity + 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: popularity,
      onClick: () => onPopularityClick(popularity + 1),
      className: (0,_utils_styleUtil__WEBPACK_IMPORTED_MODULE_3__.joinClass)('flex items-center justify-center w-5 sm:w-6 aspect-square text-xs text-gray-50 rounded-full cursor-pointer z-40 select-none', isSelected ? 'bg-blue-400' : 'bg-gray-300')
    }, popularity + 1);
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Indicator);

/***/ }),

/***/ "./src/pages/Home/Filter/Popularity/ProgressBar.tsx":
/*!**********************************************************!*\
  !*** ./src/pages/Home/Filter/Popularity/ProgressBar.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_styleUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/styleUtil */ "./src/utils/styleUtil.ts");



const ProgressBar = ({
  percent,
  color,
  isPercentBar = false,
  isBaseBar = false
}) => {
  let zIndex;

  switch (true) {
    case isPercentBar:
      zIndex = 'z-20';
      break;

    case isBaseBar:
      zIndex = 'z-10';
      break;

    default:
      zIndex = 'z-30';
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: !percent ? '0%' : ` ${(percent - 1) * 10 + 5}%`
    },
    className: (0,_utils_styleUtil__WEBPACK_IMPORTED_MODULE_1__.joinClass)('absolute top-1/2 -translate-y-1/2 h-1', color, zIndex)
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);

/***/ }),

/***/ "./src/pages/Home/Filter/Popularity/index.tsx":
/*!****************************************************!*\
  !*** ./src/pages/Home/Filter/Popularity/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar */ "./src/pages/Home/Filter/Popularity/ProgressBar.tsx");
/* harmony import */ var _Indicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Indicator */ "./src/pages/Home/Filter/Popularity/Indicator.tsx");
/* harmony import */ var _recoil_selectors_filterSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @recoil/selectors/filterSelector */ "./src/recoil/selectors/filterSelector.ts");






const Popularity = () => {
  const [min, max] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_recoil_selectors_filterSelector__WEBPACK_IMPORTED_MODULE_4__.popularityMinMax);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex w-full items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "bg-gray-300",
    percent: min
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "bg-blue-400",
    percent: max,
    isPercentBar: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "bg-gray-300",
    percent: 10.5,
    isBaseBar: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Indicator__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popularity);

/***/ }),

/***/ "./src/pages/Home/Filter/Switch.tsx":
/*!******************************************!*\
  !*** ./src/pages/Home/Filter/Switch.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_styleUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/styleUtil */ "./src/utils/styleUtil.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @recoil/atoms/filterAtom */ "./src/recoil/atoms/filterAtom.ts");





const Switch = () => {
  const [isTvOn, setIsTvOn] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_3__.isTvOnState);
  const onSetIsTvOnClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    setIsTvOn(event.target.checked);
  }, [setIsTvOn]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: (0,_utils_styleUtil__WEBPACK_IMPORTED_MODULE_1__.joinClass)('relative block w-16 px-1 py-1 font-medium text-xs rounded-full shadow-md transition-colors duration-100', !isTvOn ? 'bg-gray-700' : 'bg-blue-500')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: (0,_utils_styleUtil__WEBPACK_IMPORTED_MODULE_1__.joinClass)('absolute inset-y-0 flex items-center mt-[1px] text-gray-50', isTvOn ? 'left-5' : 'right-2')
  }, isTvOn ? 'TV' : 'Movie'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,_utils_styleUtil__WEBPACK_IMPORTED_MODULE_1__.joinClass)('w-4 aspect-square p-1 bg-gray-50 rounded-full transition-all duration-150 cursor-pointer', isTvOn ? 'translate-x-10' : '')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    onChange: onSetIsTvOnClick,
    checked: isTvOn,
    type: "checkbox",
    className: "hidden"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Switch);

/***/ }),

/***/ "./src/pages/Home/Filter/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/Home/Filter/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Switch */ "./src/pages/Home/Filter/Switch.tsx");
/* harmony import */ var _Genre__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Genre */ "./src/pages/Home/Filter/Genre.tsx");
/* harmony import */ var _Popularity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popularity */ "./src/pages/Home/Filter/Popularity/index.tsx");
/* harmony import */ var _FilterItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterItem */ "./src/pages/Home/Filter/FilterItem.tsx");
/* harmony import */ var _ApplyButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplyButtons */ "./src/pages/Home/Filter/ApplyButtons.tsx");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @recoil/atoms/filterAtom */ "./src/recoil/atoms/filterAtom.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const Filter = () => {
  const isFilterOpen = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilValue)(_recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_7__.isFilterOpenState);
  const filters = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [{
    filterName: '컨텐츠',
    filter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Switch__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }, {
    filterName: '평 점',
    filter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Popularity__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }, {
    filterName: '장 르',
    filter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Genre__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }], []);
  if (!isFilterOpen) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-[240px] sm:h-[244px] mt-1"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-1 bg-gray-50 shadow-md origin-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "divide-y-2"
  }, filters.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FilterItem__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    key: item.filterName
  }, item)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ApplyButtons__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ "./src/pages/Home/SearchInput/FilterButton.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/Home/SearchInput/FilterButton.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @recoil/atoms/filterAtom */ "./src/recoil/atoms/filterAtom.ts");




const FilterButton = () => {
  const setIsFilterOpen = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_2__.isFilterOpenState);
  const onFilterClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setIsFilterOpen(pre => !pre);
  }, [setIsFilterOpen]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onFilterClick,
    className: "py-1 px-3 shadow-md rounded-md text-sm bg-white text-gray-500 font-semibold scale-md"
  }, "Filter");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(FilterButton));

/***/ }),

/***/ "./src/pages/Home/SearchInput/index.tsx":
/*!**********************************************!*\
  !*** ./src/pages/Home/SearchInput/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_styleUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/styleUtil */ "./src/utils/styleUtil.ts");
/* harmony import */ var _FilterButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterButton */ "./src/pages/Home/SearchInput/FilterButton.tsx");




const SearchInput = ({
  classes
}) => {
  const [term, setTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const onInputChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    setTerm(event.target.value);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "searchTitle",
    className: (0,_utils_styleUtil__WEBPACK_IMPORTED_MODULE_1__.joinClass)('flex items-center w-fit px-2 rounded-sm shadow-sm bg-gray-100 border-[1px] border-gray-300 ring-gray-300 focus-within:ring-1', classes ? classes : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-5 h-5 fill-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: term,
    onChange: onInputChange,
    type: "text",
    id: "searchTitle",
    placeholder: "Search movie title",
    className: "flex-1 p-2 mx-2 bg-transparent text-gray-500 placeholder:text-sm focus:outline-none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FilterButton__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);

/***/ }),

/***/ "./src/pages/Home/constants.ts":
/*!*************************************!*\
  !*** ./src/pages/Home/constants.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentSelector": () => (/* binding */ contentSelector),
/* harmony export */   "genreSelector": () => (/* binding */ genreSelector),
/* harmony export */   "popularitySelector": () => (/* binding */ popularitySelector)
/* harmony export */ });
/* harmony import */ var _assets_popularity_priority_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/popularity/priority.jpg */ "./src/assets/popularity/priority.jpg");
/* harmony import */ var _assets_popularity_top_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/popularity/top.jpg */ "./src/assets/popularity/top.jpg");
/* harmony import */ var _assets_popularity_soso_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/popularity/soso.jpg */ "./src/assets/popularity/soso.jpg");
/* harmony import */ var _assets_popularity_bottom_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/popularity/bottom.jpg */ "./src/assets/popularity/bottom.jpg");
/* harmony import */ var _assets_genre_thrill_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/genre/thrill.jpg */ "./src/assets/genre/thrill.jpg");
/* harmony import */ var _assets_genre_love_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/genre/love.jpg */ "./src/assets/genre/love.jpg");
/* harmony import */ var _assets_genre_action_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @assets/genre/action.jpg */ "./src/assets/genre/action.jpg");
/* harmony import */ var _assets_genre_sf_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @assets/genre/sf.jpg */ "./src/assets/genre/sf.jpg");
/* harmony import */ var _assets_genre_animation_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @assets/genre/animation.jpg */ "./src/assets/genre/animation.jpg");
/* harmony import */ var _assets_genre_impressive_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @assets/genre/impressive.jpg */ "./src/assets/genre/impressive.jpg");










const contentSelector = {
  ['none']: '구분없음',
  popularity: '평점구분',
  genre: '장르구분'
};
const popularitySelector = [{
  title: '높은평점',
  subTitle: '10~8',
  description: '재미있어요',
  image: _assets_popularity_priority_jpg__WEBPACK_IMPORTED_MODULE_0__
}, {
  title: '우수한 평점',
  subTitle: '5~7',
  description: '볼만해요',
  image: _assets_popularity_top_jpg__WEBPACK_IMPORTED_MODULE_1__
}, {
  title: '중간 평점',
  subTitle: '2~4',
  description: '호불호가 갈려요',
  image: _assets_popularity_soso_jpg__WEBPACK_IMPORTED_MODULE_2__
}, {
  title: '낮은 평점',
  subTitle: '0~1',
  description: '글쎄요...',
  image: _assets_popularity_bottom_jpg__WEBPACK_IMPORTED_MODULE_3__
}];
const genreSelector = [{
  title: '액션',
  image: _assets_genre_action_jpg__WEBPACK_IMPORTED_MODULE_6__,
  ids: [28, 12, 10752]
}, {
  title: '멜로',
  image: _assets_genre_love_jpg__WEBPACK_IMPORTED_MODULE_5__,
  ids: [10749, 37]
}, {
  title: 'SF',
  ids: [14, 36, 878, 10770],
  image: _assets_genre_sf_jpg__WEBPACK_IMPORTED_MODULE_7__
}, {
  title: '스릴',
  ids: [80, 27, 9648, 53],
  image: _assets_genre_thrill_jpg__WEBPACK_IMPORTED_MODULE_4__
}, {
  title: '감동',
  ids: [35, 18, 99, 10751, 10402],
  image: _assets_genre_impressive_jpg__WEBPACK_IMPORTED_MODULE_9__
}, {
  title: '애니',
  ids: [16],
  image: _assets_genre_animation_jpg__WEBPACK_IMPORTED_MODULE_8__
}];

/***/ }),

/***/ "./src/pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/MainLayout */ "./src/components/MainLayout/index.tsx");
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInput */ "./src/pages/Home/SearchInput/index.tsx");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filter */ "./src/pages/Home/Filter/index.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./src/pages/Home/Content/index.tsx");
/* harmony import */ var _ContentSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContentSelector */ "./src/pages/Home/ContentSelector.tsx");







const Home = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MainLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-fit mx-auto mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SearchInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    classes: "sm:w-[35rem]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Filter__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentSelector__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/recoil/atoms/filterAtom.ts":
/*!****************************************!*\
  !*** ./src/recoil/atoms/filterAtom.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genreState": () => (/* binding */ genreState),
/* harmony export */   "isFilterOpenState": () => (/* binding */ isFilterOpenState),
/* harmony export */   "isFilterResetState": () => (/* binding */ isFilterResetState),
/* harmony export */   "isTvOnState": () => (/* binding */ isTvOnState),
/* harmony export */   "popularityState": () => (/* binding */ popularityState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");

const isFilterOpenState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'isFilterOpenState',
  default: false
});
const isTvOnState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'isTvOnState',
  default: false
});
const genreState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'genreState',
  default: []
});
const popularityState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'popularityState',
  default: []
});
const isFilterResetState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'isFilterReset',
  default: false
});

/***/ }),

/***/ "./src/recoil/atoms/movieAtom.ts":
/*!***************************************!*\
  !*** ./src/recoil/atoms/movieAtom.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allMovies": () => (/* binding */ allMovies),
/* harmony export */   "movieCursor": () => (/* binding */ movieCursor)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");

const movieCursor = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'movieCursor',
  default: 1
});
const allMovies = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'allMovies',
  default: []
});

/***/ }),

/***/ "./src/recoil/atoms/selectionAtom.ts":
/*!*******************************************!*\
  !*** ./src/recoil/atoms/selectionAtom.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentByWhatState": () => (/* binding */ contentByWhatState),
/* harmony export */   "selectedGenreState": () => (/* binding */ selectedGenreState),
/* harmony export */   "selectedPopularityState": () => (/* binding */ selectedPopularityState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");

const contentByWhatState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'contentByWhatState',
  default: 'none'
});
const selectedPopularityState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'selectedPopularityState',
  default: [0, 0]
});
const selectedGenreState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'selectedGenreState',
  default: []
});

/***/ }),

/***/ "./src/recoil/selectors/filterSelector.ts":
/*!************************************************!*\
  !*** ./src/recoil/selectors/filterSelector.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popularityMinMax": () => (/* binding */ popularityMinMax)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @recoil/atoms/filterAtom */ "./src/recoil/atoms/filterAtom.ts");


const popularityMinMax = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({
  key: 'popularityMinMax',
  get: ({
    get
  }) => {
    const popularityList = get(_recoil_atoms_filterAtom__WEBPACK_IMPORTED_MODULE_1__.popularityState);

    switch (popularityList.length) {
      case 0:
        return [0, 0];

      case 1:
        return [popularityList[0], 0];

      default:
        return [Math.min(...popularityList), Math.max(...popularityList)];
    }
  }
});

/***/ }),

/***/ "./src/recoil/selectors/movieSelector.ts":
/*!***********************************************!*\
  !*** ./src/recoil/selectors/movieSelector.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllMovies": () => (/* binding */ getAllMovies),
/* harmony export */   "getMoviesQuery": () => (/* binding */ getMoviesQuery),
/* harmony export */   "getTotalMoviesCount": () => (/* binding */ getTotalMoviesCount)
/* harmony export */ });
/* harmony import */ var _atoms_movieAtom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../atoms/movieAtom */ "./src/recoil/atoms/movieAtom.ts");
/* harmony import */ var _axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axiosInstance */ "./src/axiosInstance/index.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");



const getMoviesQuery = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.selectorFamily)({
  key: 'getMoviesQuery',
  get: cursor => async () => {
    try {
      const {
        data
      } = await _axiosInstance__WEBPACK_IMPORTED_MODULE_1__.http.get('/movie/popular', {
        params: {
          page: cursor,
          api_key: "78c4651e6f70ef92cb879b749825122d"
        }
      });
      return data.results || [];
    } catch (err) {
      throw 'movie data error';
    }
  }
});
const getAllMovies = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.selector)({
  key: 'getCurMovies',
  get: ({
    get
  }) => {
    const cursors = Array.from(Array(get(_atoms_movieAtom__WEBPACK_IMPORTED_MODULE_0__.movieCursor)).keys(), c => c + 1);
    return get((0,recoil__WEBPACK_IMPORTED_MODULE_2__.waitForNone)(cursors.map(getMoviesQuery)));
  }
});
const getTotalMoviesCount = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.selector)({
  key: 'getTotalMoviesCount',
  get: ({
    get
  }) => {
    const cursor = get(_atoms_movieAtom__WEBPACK_IMPORTED_MODULE_0__.movieCursor);
    const curMovies = get((0,recoil__WEBPACK_IMPORTED_MODULE_2__.noWait)(getMoviesQuery(cursor)));
    return curMovies.state === 'hasValue' ? (cursor - 1) * 20 + curMovies.contents.length : 0;
  }
});

/***/ }),

/***/ "./src/recoil/selectors/selectionSelector.ts":
/*!***************************************************!*\
  !*** ./src/recoil/selectors/selectionSelector.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMovieByGenre": () => (/* binding */ getMovieByGenre),
/* harmony export */   "getMovieByPopularity": () => (/* binding */ getMovieByPopularity)
/* harmony export */ });
/* harmony import */ var _atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../atoms/selectionAtom */ "./src/recoil/atoms/selectionAtom.ts");
/* harmony import */ var _recoil_atoms_movieAtom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @recoil/atoms/movieAtom */ "./src/recoil/atoms/movieAtom.ts");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");



const getMovieByPopularity = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.selector)({
  key: 'getMovieBySort',
  get: ({
    get
  }) => {
    const movies = get(_recoil_atoms_movieAtom__WEBPACK_IMPORTED_MODULE_1__.allMovies);
    const [one, other] = get(_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_0__.selectedPopularityState);
    if (!one && !other) return [];
    const min = one < other ? one : other;
    const max = one < other ? other : one;
    const filtered = movies.filter(movie => movie.vote_average >= min && movie.vote_average <= max);
    return filtered;
  }
});
const getMovieByGenre = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.selector)({
  key: 'getMovieByGenre',
  get: ({
    get
  }) => {
    const movies = get(_recoil_atoms_movieAtom__WEBPACK_IMPORTED_MODULE_1__.allMovies);
    const genres = get(_atoms_selectionAtom__WEBPACK_IMPORTED_MODULE_0__.selectedGenreState);
    return movies.filter(movie => {
      for (const id of genres) {
        const isIncludes = movie.genre_ids.includes(id);
        if (isIncludes) return true;
      }

      return false;
    });
  }
});

/***/ }),

/***/ "./src/utils/styleUtil.ts":
/*!********************************!*\
  !*** ./src/utils/styleUtil.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imgUrlMaker": () => (/* binding */ imgUrlMaker),
/* harmony export */   "joinClass": () => (/* binding */ joinClass)
/* harmony export */ });
const joinClass = (...classes) => classes.join(' ');
const imgUrlMaker = url => `https://image.tmdb.org/t/p/w500${url}`;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/main.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/main.css ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.scale-md {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 100ms;\n}\n.scale-md:hover {\n  --tw-scale-x: 102%;\n  --tw-scale-y: 102%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-md:active {\n  --tw-scale-x: 100%;\n  --tw-scale-y: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.static {\n  position: static;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n}\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n.top-0 {\n  top: 0px;\n}\n.left-5 {\n  left: 1.25rem;\n}\n.right-2 {\n  right: 0.5rem;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.z-40 {\n  z-index: 40;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-20 {\n  z-index: 20;\n}\n.z-30 {\n  z-index: 30;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.ml-3 {\n  margin-left: 0.75rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.mr-5 {\n  margin-right: 1.25rem;\n}\n.mt-\\[1px\\] {\n  margin-top: 1px;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mr-3 {\n  margin-right: 0.75rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.hidden {\n  display: none;\n}\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\n.h-\\[50vh\\] {\n  height: 50vh;\n}\n.h-\\[240px\\] {\n  height: 240px;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-20 {\n  height: 5rem;\n}\n.h-32 {\n  height: 8rem;\n}\n.h-40 {\n  height: 10rem;\n}\n.h-full {\n  height: 100%;\n}\n.h-1 {\n  height: 0.25rem;\n}\n.w-fit {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.w-\\[1rem\\] {\n  width: 1rem;\n}\n.w-16 {\n  width: 4rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-screen-lg {\n  max-width: 1024px;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.origin-top {\n  transform-origin: top;\n}\n.translate-x-10 {\n  --tw-translate-x: 2.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-cols-\\[1\\.3fr\\2c 4fr\\] {\n  grid-template-columns: 1.3fr 4fr;\n}\n.place-items-start {\n  place-items: start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-x-3 {\n  -moz-column-gap: 0.75rem;\n       column-gap: 0.75rem;\n}\n.gap-y-2 {\n  row-gap: 0.5rem;\n}\n.space-y-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));\n}\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.divide-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(2px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(2px * var(--tw-divide-y-reverse));\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.border-\\[1px\\] {\n  border-width: 1px;\n}\n.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.bg-blue-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity));\n}\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n.fill-gray-400 {\n  fill: #9ca3af;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.pl-3 {\n  padding-left: 0.75rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-bold {\n  font-weight: 700;\n}\n.text-gray-50 {\n  --tw-text-opacity: 1;\n  color: rgb(249 250 251 / var(--tw-text-opacity));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.text-blue-50 {\n  --tw-text-opacity: 1;\n  color: rgb(239 246 255 / var(--tw-text-opacity));\n}\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.ring-gray-50 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(249 250 251 / var(--tw-ring-opacity));\n}\n.ring-gray-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-100 {\n  transition-duration: 100ms;\n}\n.duration-150 {\n  transition-duration: 150ms;\n}\n.first-letter\\:uppercase::first-letter {\n  text-transform: uppercase;\n}\n.placeholder\\:text-sm::-moz-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm:-ms-input-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm::placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.focus-within\\:ring-1:focus-within {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.hover\\:bg-blue-500:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n.hover\\:text-gray-50:hover {\n  --tw-text-opacity: 1;\n  color: rgb(249 250 251 / var(--tw-text-opacity));\n}\n.hover\\:text-blue-50:hover {\n  --tw-text-opacity: 1;\n  color: rgb(239 246 255 / var(--tw-text-opacity));\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n@media (min-width: 640px) {\n\n  .sm\\:h-\\[244px\\] {\n    height: 244px;\n  }\n\n  .sm\\:w-\\[35rem\\] {\n    width: 35rem;\n  }\n\n  .sm\\:w-6 {\n    width: 1.5rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer components {\n  .scale-md {\n    @apply hover:scale-[102%] active:scale-[100%] transition-transform duration-100;\n  }\n\n  .scale-sm {\n    @apply hover:scale-[101%] active:scale-[100%] transition-transform duration-100;\n  }\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/genre/action.jpg":
/*!*************************************!*\
  !*** ./src/assets/genre/action.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41b8f5fde8c0fbe66af0.jpg";

/***/ }),

/***/ "./src/assets/genre/animation.jpg":
/*!****************************************!*\
  !*** ./src/assets/genre/animation.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c384812b185ff97ca4c.jpg";

/***/ }),

/***/ "./src/assets/genre/impressive.jpg":
/*!*****************************************!*\
  !*** ./src/assets/genre/impressive.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ac87df0fe1ea7c91906.jpg";

/***/ }),

/***/ "./src/assets/genre/love.jpg":
/*!***********************************!*\
  !*** ./src/assets/genre/love.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "025f240e07091baad3e6.jpg";

/***/ }),

/***/ "./src/assets/genre/sf.jpg":
/*!*********************************!*\
  !*** ./src/assets/genre/sf.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db8e11596a9b7ec04df6.jpg";

/***/ }),

/***/ "./src/assets/genre/thrill.jpg":
/*!*************************************!*\
  !*** ./src/assets/genre/thrill.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5222a6b072bc122ec8c2.jpg";

/***/ }),

/***/ "./src/assets/popularity/bottom.jpg":
/*!******************************************!*\
  !*** ./src/assets/popularity/bottom.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78c49ca117abb219facb.jpg";

/***/ }),

/***/ "./src/assets/popularity/priority.jpg":
/*!********************************************!*\
  !*** ./src/assets/popularity/priority.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bde2a7a4c0a7f14da2d1.jpg";

/***/ }),

/***/ "./src/assets/popularity/soso.jpg":
/*!****************************************!*\
  !*** ./src/assets/popularity/soso.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0075871b98ad23709d2.jpg";

/***/ }),

/***/ "./src/assets/popularity/top.jpg":
/*!***************************************!*\
  !*** ./src/assets/popularity/top.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a94e7b425478d62b0112.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksearch_movie"] = self["webpackChunksearch_movie"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_react-dom_client_js-node_modules_react-route-40e29c"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.33cc1183a79bf927e764.bundle.js.map