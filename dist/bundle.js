({954:function(){var t,o;o=[],(t=this).addPointData=function(t,a,e){var n={type:"Feature",properties:e,geometry:{type:"Point",coordinates:[t,a]}};o.push(n);var r=function(t){var o={};return t.forEach((function(t,a){var e="".concat(t.geometry.coordinates[0],",").concat(t.geometry.coordinates[1]);o[e]||(o[e]=[]),o[e].push(a)})),o}(o);!function(t,o){var a=1e-4;Object.values(o).forEach((function(o){o.length>1&&o.forEach((function(e,n){var r=n/o.length*2*Math.PI;t[e].geometry.coordinates[0]+=a*Math.cos(r),t[e].geometry.coordinates[1]+=a*Math.sin(r)}))}))}(o,r)},t.allData=o}})[954]();