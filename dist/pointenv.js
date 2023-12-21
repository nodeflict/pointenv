/**
 * PointEnv loads the simple environment variables v1.0.0
 * https://github.com/nodeflict/pointenv
 * 
 * @license MIT license
 * @version 1.2.0
 * 
 * https://github.com/nodeflict/pointenv/blob/main/LICENSE
 * 
 * @author Shahzada Modassir
 * date: 21 December 2023 14:52 GMT+0530 (India)
 */
const path = require("path");
const fs = require("fs");

const rcomment = /^\s*(?:#|\/\/).*$/;
const rcots = /^\s*(?:\'|\")/;
const rextract = /^(.*?)=/;

function set(matched) {
	return matched && [matched[1], matched[2]];
}

function loadEnv(env, options) {
	options 			= options || {encoding: "utf-8"};
	const envpath = path.resolve(process.cwd(), env || ".env");
	const envData = fs.readFileSync(envpath, options);
	const lines 	= envData.split(/\n/);
	const retenv	= {};
	var match, key, value, regex, complexvalue;

	for(var i=0; i < lines.length; i++) {
		if (!rcomment.test(lines[i])) {
			value = set(lines[i].split(rextract));
			key = value.shift();
			if (value &&
				(match = rcots.exec(value[0])) &&
				(regex = new RegExp("^\s*[" + match[0] + "](.*?)[^\\\\]" + match[0])) &&
				(complexvalue = (regex.exec(value[0])||[])[1])) {
				retenv[key]=complexvalue.trim();
			} else {
				retenv[key]=value[0].replace(/#.*$/, "").trim();
			}
		}
	}

	return retenv;
}

function PointEnv() {
	return new PointEnv.prototype.init();
}

PointEnv.load=function(env) {
	var name, data = loadEnv(env);
	for(name in data) {
		process.env[name]=data[name];
	}
};

module.exports=PointEnv;