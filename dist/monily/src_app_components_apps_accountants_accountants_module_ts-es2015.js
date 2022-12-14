(self["webpackChunkmonily"] = self["webpackChunkmonily"] || []).push([["src_app_components_apps_accountants_accountants_module_ts"],{

/***/ 87405:
/*!*********************************************************************!*\
  !*** ./src/app/components/apps/accountants/accountant.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountantComponent": function() { return /* binding */ AccountantComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/firebase/auth.service */ 35873);
/* harmony import */ var _shared_services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/local.service */ 30652);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);









class AccountantComponent {
    constructor(http, localService, toasterService, location) {
        this.http = http;
        this.localService = localService;
        this.toasterService = toasterService;
        this.location = location;
    }
    ngOnInit() {
        this.path = location.pathname.split('/')[2];
    }
}
AccountantComponent.??fac = function AccountantComponent_Factory(t) { return new (t || AccountantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_shared_services_local_service__WEBPACK_IMPORTED_MODULE_1__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location)); };
AccountantComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: AccountantComponent, selectors: [["app-accountant"]], decls: 46, vars: 3, consts: [[3, "title", "active_item"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "theme-form"], [1, "form-group"], [1, "col-lg-6", "mt-3"], [1, "col-form-label"], ["type", "text", "required", "", "placeholder", "Name", 1, "form-control"], ["type", "text", "required", "", "placeholder", "Number", 1, "form-control"], ["type", "text", "required", "", "placeholder", "Email", 1, "form-control"], ["placeholder", "Select Role"], [1, "d-flex", "w-100"], ["placeholder", "Select Client", 1, "w-90", 3, "multiple"], ["routerLink", "/clients/add-client"], [1, "btn", "btn-primary", "ml-3"], [1, "fa", "fa-plus"], [1, "col-lg-12", "d-flex", "justify-content-end"], [1, "btn", "btn-primary", "mt-3", "mb-3"], ["routerLink", ".."]], template: function AccountantComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "ng-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](25, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](30, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](34, "Azeem");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](36, "Fahim");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](38, "Fahad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](41, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](45, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("title", ctx.path.replace("-", " "))("active_item", ctx.path.replace("-", " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("multiple", true);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["??r"], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref], styles: [".col-sm-12[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  text-transform: uppercase;\n}\n\n.btn-primary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRhbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSx5QkFBQTtBQURaOztBQU1JO0VBQ0ksV0FBQTtBQUhSIiwiZmlsZSI6ImFjY291bnRhbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLXNtLTEye1xyXG4gICAgcHtcclxuICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYnRuLXByaW1hcnl7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 99689:
/*!***************************************************************************!*\
  !*** ./src/app/components/apps/accountants/accountants-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "financialRoutingModule": function() { return /* binding */ financialRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _accountant_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accountant.component */ 87405);
/* harmony import */ var _accountants_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accountants.component */ 49469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _accountants_component__WEBPACK_IMPORTED_MODULE_1__.AccountantsComponent
            },
            {
                path: 'add-accountant',
                component: _accountant_component__WEBPACK_IMPORTED_MODULE_0__.AccountantComponent
            },
            {
                path: 'edit-accountant',
                component: _accountant_component__WEBPACK_IMPORTED_MODULE_0__.AccountantComponent
            }
        ]
    }
];
class financialRoutingModule {
}
financialRoutingModule.??fac = function financialRoutingModule_Factory(t) { return new (t || financialRoutingModule)(); };
financialRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: financialRoutingModule });
financialRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](financialRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 49469:
/*!**********************************************************************!*\
  !*** ./src/app/components/apps/accountants/accountants.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountantsComponent": function() { return /* binding */ AccountantsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/firebase/auth.service */ 35873);
/* harmony import */ var _shared_services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/local.service */ 30652);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 82798);








function AccountantsComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](16, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AccountantsComponent_tr_27_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r3.selectAccountant(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](18, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.index;
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](i_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", item_r2.name ? item_r2.name : "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](item_r2.phone ? item_r2.phone : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](item_r2.email ? item_r2.email : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](item_r2.role ? item_r2.role : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](item_r2.status ? item_r2.status : "N/A");
} }
const _c0 = function (a1, a2) { return { itemsPerPage: 5, currentPage: a1, totalItems: a2 }; };
class AccountantsComponent {
    constructor(http, localService, toasterService) {
        this.http = http;
        this.localService = localService;
        this.toasterService = toasterService;
        this.accountants = [
            {
                name: 'Wajiha',
                role: 'Admin',
                phone: '+92311293847',
                status: 'Activate',
                email: 'wajiha@arthurlawrence.net'
            },
            {
                name: 'Fahim',
                role: 'user',
                phone: '+92311293847',
                status: 'Activate',
                email: 'fahim@arthurlawrence.net'
            },
            {
                name: 'Farwah',
                role: 'user',
                phone: '+92311293847',
                status: 'Activate',
                email: 'farwah@arthurlawrence.net'
            },
            {
                name: 'Ahmed',
                role: 'Admin',
                phone: '+92311293847',
                status: 'Deactivate',
                email: 'ahmed@arthurlawrence.net'
            }
        ];
    }
    ngOnInit() {
    }
    selectAccountant(item) {
        this.selectedAccountant = item;
    }
}
AccountantsComponent.??fac = function AccountantsComponent_Factory(t) { return new (t || AccountantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_shared_services_local_service__WEBPACK_IMPORTED_MODULE_1__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService)); };
AccountantsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: AccountantsComponent, selectors: [["app-accountants"]], decls: 70, vars: 13, consts: [[3, "title", "active_item"], [1, "container"], [1, "row"], [1, "col-lg-12"], ["routerLink", "add-accountant", 1, "btn", "btn-primary", "d-flex", "justify-content-center", "align-items-baseline", "mt-3", "mb-3"], [1, "fa", "fa-plus", "ml-1", "me-1"], [1, "table-responsive"], [1, "table"], ["scope", "col"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], ["id", "staticBackdrop", "data-bs-backdrop", "static", "data-bs-keyboard", "true", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "fa", "fa-times"], ["id", "staticBackdropLabel", 1, "modal-title"], [1, "modal-body"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "modal-footer"], ["scope", "row"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "btn", "btn-danger", "ml-1", "me-1"], [1, "fa", "fa-trash"], ["data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", 1, "btn", "btn-primary", "ml-1", "me-1", 3, "click"], [1, "fa", "fa-eye"], ["routerLink", "edit-accountant", 1, "btn", "btn-secondary", "ml-1", "me-1"], [1, "fa", "fa-edit"]], template: function AccountantsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, " Add Accountant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](25, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](27, AccountantsComponent_tr_27_Template, 21, 6, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](28, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](33, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](35, "Accountant Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](42, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](48, "Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](52, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](54, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](60, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](66, "Assigned Clients:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](68, "Fahim, Farwah");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](69, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("title", "Accountants")("active_item", "Accountants");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](28, 7, ctx.accountants, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](10, _c0, ctx.accountantsPage, ctx.total)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx.selectedAccountant == null ? null : ctx.selectedAccountant.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx.selectedAccountant == null ? null : ctx.selectedAccountant.phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx.selectedAccountant == null ? null : ctx.selectedAccountant.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx.selectedAccountant == null ? null : ctx.selectedAccountant.role, "");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe], styles: [".col-sm-12[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  text-transform: uppercase;\n}\n\n.modal-body[_ngcontent-%COMP%], .modal-header[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2rem;\n}\n\n.modal-body[_ngcontent-%COMP%]   i.fa-times[_ngcontent-%COMP%], .modal-header[_ngcontent-%COMP%]   i.fa-times[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRhbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0kseUJBQUE7QUFEWjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQURSOztBQUtJO0VBQ0ksZ0JBQUE7QUFGUiIsImZpbGUiOiJhY2NvdW50YW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtc20tMTJ7XHJcbiAgICBwe1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5tb2RhbC1ib2R5LC5tb2RhbC1oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgaS5mYS10aW1lc3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbmxhYmVse1xyXG4gICAgc3BhbjpmaXJzdC1jaGlsZHtcclxuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 31695:
/*!*******************************************************************!*\
  !*** ./src/app/components/apps/accountants/accountants.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountantsModule": function() { return /* binding */ AccountantsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-dropzone */ 30753);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ 46505);
/* harmony import */ var _accountants_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accountants.component */ 49469);
/* harmony import */ var _accountant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accountant.component */ 87405);
/* harmony import */ var _accountants_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accountants-routing.module */ 99689);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ 82798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);











class AccountantsModule {
}
AccountantsModule.??fac = function AccountantsModule_Factory(t) { return new (t || AccountantsModule)(); };
AccountantsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: AccountantsModule });
AccountantsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _accountants_routing_module__WEBPACK_IMPORTED_MODULE_3__.financialRoutingModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__.NgxDropzoneModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.NgxPaginationModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](AccountantsModule, { declarations: [_accountants_component__WEBPACK_IMPORTED_MODULE_1__.AccountantsComponent, _accountant_component__WEBPACK_IMPORTED_MODULE_2__.AccountantComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _accountants_routing_module__WEBPACK_IMPORTED_MODULE_3__.financialRoutingModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__.NgxDropzoneModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.NgxPaginationModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_accountants_accountants_module_ts-es2015.js.map