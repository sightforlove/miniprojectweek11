"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var country_service_1 = require("../country.service");
var Page1Component = /** @class */ (function () {
    function Page1Component(countryService) {
        this.countryService = countryService;
        this.countries = null;
    }
    Page1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.countryService.getCountries().subscribe(function (country) {
            _this.countries = country;
        });
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: 'ns-page1',
            templateUrl: './page1.component.html',
            styleUrls: ['./page1.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [country_service_1.CountryService])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZTEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFvRDtBQVNwRDtJQUVBLHdCQUFvQixjQUErQjtRQUEvQixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFEbkQsY0FBUyxHQUFHLElBQUksQ0FBQztJQUNxQyxDQUFDO0lBRXJELGlDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUMxQyxVQUFBLE9BQU87WUFDTCxLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFWVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUdtQyxnQ0FBYztPQUZ0QyxjQUFjLENBWTFCO0lBQUQscUJBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3VudHJ5U2VydmljZSB9IGZyb20gXCIuLi9jb3VudHJ5LnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1wYWdlMScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlMS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2UxLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZTFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuY291bnRyaWVzID0gbnVsbDtcbmNvbnN0cnVjdG9yKHByaXZhdGUgY291bnRyeVNlcnZpY2UgOiBDb3VudHJ5U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvdW50cnlTZXJ2aWNlLmdldENvdW50cmllcygpLnN1YnNjcmliZShcbiAgICAgIGNvdW50cnk9PiB7XG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gY291bnRyeTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbn1cbiJdfQ==