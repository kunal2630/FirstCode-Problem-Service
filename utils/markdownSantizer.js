/**
 * This function sanitizes a problem statement provided in Markdown format,
 * removing any potentially harmful elements like script tags or problematic content.
 * @param {string} markdownText - The Markdown-formatted problem statement.
 * @returns {string} - The sanitized problem statement.
 */

const marked=require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
var TurndownService = require('turndown')

function sanitizeProblemStatement(markdownText) {

    var turndownService = new TurndownService()

    const markedToHtml=marked.parse(markdownText);
    const sanitizedHtml=sanitizeHtmlLibrary(markedToHtml,{
        allowedTags:  sanitizeHtmlLibrary.defaults.allowedTags.concat([ 'img' ])
    })
    const HtmlToMarked=turndownService.turndown(sanitizedHtml);

    return HtmlToMarked;

}

module.exports=sanitizeProblemStatement;
