"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get("~/assets/country-capitals.json");
    };
    CountryService.prototype.getCountry = function (name) {
        console.log(name);
        return this.http.get("~/assets/country-capitals.json").pipe(operators_1.flatMap(function (response) { return response; }), operators_1.filter(function (res) { return res["CountryName"] === name; }));
    };
    CountryService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CountryService);
    return CountryService;
}());
exports.CountryService = CountryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291bnRyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUNsRCw0Q0FBaUQ7QUFLakQ7SUFFRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMscUNBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLElBQVk7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxDQUN6RCxtQkFBTyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUssUUFBUSxFQUFiLENBQWEsQ0FBQyxFQUNsQyxrQkFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksRUFBM0IsQ0FBMkIsQ0FBQyxDQUMzQyxDQUFDO0lBQ0osQ0FBQztJQWRVLGNBQWM7UUFIMUIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBRzBCLGlCQUFVO09BRnpCLGNBQWMsQ0FlMUI7SUFBRCxxQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBmaWx0ZXIsIGZsYXRNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBDb3VudHJ5U2VydmljZSB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0Q291bnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwifi9hc3NldHMvY291bnRyeS1jYXBpdGFscy5qc29uXCIpO1xuICB9XG5cbiAgZ2V0Q291bnRyeShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIn4vYXNzZXRzL2NvdW50cnktY2FwaXRhbHMuanNvblwiKS5waXBlKFxuICAgICAgZmxhdE1hcChyZXNwb25zZSA9PiA8YW55PnJlc3BvbnNlKSxcbiAgICAgIGZpbHRlcihyZXMgPT4gcmVzW1wiQ291bnRyeU5hbWVcIl0gPT09IG5hbWUpXG4gICAgKTtcbiAgfVxufVxuIl19