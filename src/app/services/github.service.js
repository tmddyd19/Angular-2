"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
var GithubService = (function () {
    function GithubService(jsonp) {
        this.jsonp = jsonp;
    }
    GithubService.prototype.getUser = function () {
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get('https://api.github.com/users/' + this.username, { search: params })
            .map(function (res) { return res.json().data; });
    };
    GithubService.prototype.getRepos = function () {
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get('https://api.github.com/users/' + this.username + "/repos", { search: params })
            .map(function (res) { return res.json().data; });
    };
    GithubService.prototype.updateUser = function (username) {
        this.username = username;
    };
    return GithubService;
}());
GithubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Jsonp])
], GithubService);
exports.GithubService = GithubService;
//# sourceMappingURL=github.service.js.map