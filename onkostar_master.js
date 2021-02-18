// add the following command to form scripts
// window.om =window.om||Ext.Loader.loadScriptFile('https://ionos.tmo-heidelberg.de/js/onkostar_master.js', onLoad=function(){true})||true

console.log('Loading onkostar_master.js')

// for debugging uncomment
//window.om = undefined

// removing existing dom references - just in case...
//Ext.select("head script[src*='onkostar_master.js']").splice(-1,1).remove()
Ext.select("head link[href*='onkostar_master.css']").remove()

// adding CSS file to head
Ext.DomHelper.append(Ext.getHead(), {tag: 'link', type: 'text/css', rel: 'stylesheet', href: 'https://ionos.tmo-heidelberg.de/css/onkostar_master.css?modified='+Date.now()})

// functions
add_class = function (cmp, attr, val, cl) {
        console.log("form "+ cmp +"["+attr+"='"+val+"']")
        comp = Ext.ComponentQuery.query("form "+ cmp +"["+attr+"*='"+val+"']")
        if (comp.length > 0) comp [0].addCls(cl)
}

add_t = function() {
        console.log('setInterval')
        Ext.DomQuery.select("label:not([t])").forEach(function(e) {e.setAttribute('t',e.innerText)})
        Ext.DomQuery.select(".subFormWithBorder:not([t])", false).forEach(function(e) {e.setAttribute('t',e.querySelector('.x-panel-header').innerText)})
}

setInterval(add_t,1000)

// init

//grf = Ext.ComponentQuery.query('genericReadForm')[0]
//title = grf.getHeader().title.replace(/.+\- /s,'')
//if (title=="MA Diagnose") {
//      add_class('label','text','ICD-10: ','l_strong')
//      add_class('panel','title','Unterformular MA Diskussion','p_discussion')
//}
getCatalogFieldValue = function(fname) {
	c = Ext.ComponentQuery.query("onkostarComboboxField[originalName='"+fname+"']")[0]
	ci = c.comboboxItems[code=getFieldValue(fname)]
	return(ci==undefined ? undefined : ci.shortdesc)
}
