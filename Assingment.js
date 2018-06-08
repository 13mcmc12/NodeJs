/**
 * Created by Sanjay Sharma on 07-06-2018.
 */

var handleBars = require('handlebars')
/*
 var xmlFeeder = '<d>{{myName}}</d>'
 var context = {myName:'Sanjay Sharma'}
 var template = handleBars.compile(xmlFeeder)
 var html    = template(context)
 console.log(html)
 */
//var data = {data:[1,2,3,]}
var data = {
    data: [
        {
            d: {
                0: 'a'
                , 1: 'b'
            },
            e: {
                0: 'a'
                , 1: 'b'
            }

        }
    ]
}
var xmlRenderStr = '<d> {{#each data as |subData| }} {{#each subData as |child |}} {{#each child as |value key |}} <dv>{{value}}</dv> \n{{/each}} {{/each}} {{/each}}</d>'
//var xmlRenderStr = '<d> {{#each data}}<p>{{this}}</p>{{/each}}</d>'
var template = handleBars.compile(xmlRenderStr)
var html = template(data)
console.log(html)

var data2 = {data:[
    {
        fabricContentValue:{
            0:{materialName:'A', materialColor:'pink'},
            1:{materialName:'B', materialColor:'blue'},
            2:{materialName:'C', materialColor:'lime'}
        }
    }
]}
var xmlRenderStr2 = '<FabricContentValues>\n{{#each data as |subData| }}\n<FabricContentValue> {{#each subData as |values key |}} {{#each values as | value key |}}\n <fabricMaterialName>{{materialName}}</fabricMaterialName> <fabricColor>{{materialColor}}</fabricColor> \n{{/each}} {{/each}}</FabricContentValue>{{/each}}</FabricContentValues>'
var template2  = handleBars.compile(xmlRenderStr2)
var html2 = template2(data2)
console.log(html2)

