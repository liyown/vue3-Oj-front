import * as monaco from "monaco-editor"
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker"
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker"
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker"
import {loader} from "@guolao/vue-monaco-editor";

// loaded monaco-editor from `node_modules`
loader.config({monaco})

self.MonacoEnvironment = {
    getWorker(_, label) {
        if (label === "json") {
            return new jsonWorker()
        }
        if (label === "css" || label === "scss" || label === "less") {
            return new cssWorker()
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
            return new htmlWorker()
        }
        if (label === "typescript" || label === "javascript") {
            return new tsWorker()
        }
        return new editorWorker()
    }
}

import {language} from "monaco-editor/esm/vs/basic-languages/java/java.js"

// 注册SQL关键字提示
monaco.languages.registerCompletionItemProvider('java', {
    provideCompletionItems: (model, position) => {
        let suggestions: any = [];
        // language.keywords 是获取内置的SQL关键字
        language.keywords.map((item: any) => {
            suggestions.push({
                label: item,
                kind: monaco.languages.CompletionItemKind['Keyword'],
                insertText: item + ' ',
                detail: '内置关键字',
            });
        });
        return {
            suggestions
        };
    }
})