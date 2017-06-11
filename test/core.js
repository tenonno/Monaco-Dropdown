let value = `

/*▼🍣*/(null)
/*▼🍣*/(null)


if (/*▼進捗*/(false)) {

    const a = window[/*▼ブロック*/('aaaa')];

}

function x() {
    console.log("Hello world!");
}

`;


value = `

/*▼test*/(null)

`;

require.config({
    paths: {
        'vs': '../node_modules/monaco-editor/min/vs'
    }
});


require.config({
    'vs/nls': {
        availableLanguages: {
            '*': 'ja'
        }
    }
});


require(['vs/editor/editor.main'], () => {

    const editor = monaco.editor.create(document.getElementById('container'), {
        value: value,
        language: 'javascript',


        fontSize: 25


    });



    let c = 0;


    //removeContentWidget
    class DropdownWidget {

        constructor(x, y, w, range) {
            this.domNode = null;

            DropdownWidget.collection.push(this);

            this.id = 'my.content.widget' + Math.random();

            this.x = x;
            this.y = y;

            this.w = w;

            this.range = range;

        }

        static aa() {

        }

        getId() {
            return this.id;
        }

        createDiv() {

            const div = document.createElement('span');
            editor.applyFontInfo(div);
            div.style.whiteSpace = 'nowrap';
            return div;

        }

        createDOM() {

            const config = editor.getConfiguration();

            const div = document.createElement('div');

            editor.applyFontInfo(div)


            console.info('range', this.range);
            console.info(editor.getOffsetForColumn);

            console.info('width',
                editor.getOffsetForColumn(this.range.endLineNumber, this.range.endColumn) -
                editor.getOffsetForColumn(this.range.startLineNumber, this.range.startColumn)
            );




            Math.round = (e) => e;

            for (let i = 0; i < this.w.length - 1; ++i) {
                console.log(
                    editor.getOffsetForColumn(this.range.startLineNumber, this.range.startColumn + i + 1) -
                    editor.getOffsetForColumn(this.range.startLineNumber, this.range.startColumn + i))
            }


            // editor.render();

            const start = editor.getOffsetForColumn(this.range.startLineNumber, this.range.startColumn);




            const end = editor.getOffsetForColumn(this.range.endLineNumber, this.range.endColumn);
            /*
                        const end = editor.getOffsetForColumn(
                            this.range.startLineNumber,
                            this.range.startColumn + this.w.split('(')[0].length);

            */


            const width = end - start;



            // /*▼name*/ の横幅
            const width1 =
                editor.getOffsetForColumn(this.range.startLineNumber, this.range.startColumn + this.w.split('(')[0].length) -
                editor.getOffsetForColumn(this.range.startLineNumber, this.range.startColumn);



            const width2 =
                editor.getOffsetForColumn(this.range.startLineNumber, this.range.startColumn + this.w.split('(')[0].length + 1) -
                editor.getOffsetForColumn(this.range.startLineNumber, this.range.startColumn + this.w.split('(')[0].length);





            div.style.width = width + 'px';

            // dom.style.lineHeight = config.fontInfo.lineHeight + 4 + 'px';

            //div.style.background = 'rgba(255, 0, 0, .1)';


            const name = this.w.split('(')[0].substr(3).slice(0, -2);


            const dropdownWidth = 26;
            const textWidth = width1 - dropdownWidth;


            const contentWidth =
                editor.getOffsetForColumn(this.range.startLineNumber, this.range.startColumn + this.w.split('(')[0].length + this.w.split('(')[1].slice(0, -1).length) -
                editor.getOffsetForColumn(this.range.startLineNumber, this.range.startColumn + this.w.split('(')[0].length);


            div.style.pointerEvents = 'none';


            const height = config.fontInfo.lineHeight - 4;

            div.innerHTML = `

                <style>
                    .root {
                        pointer-events: none;
                    }

                    .background {
                        background: #eee;
                    }

                    .last {
                            border-radius: 0 4px 4px 0;
                    }

                </style>

                <div style="display: flex; color: #fff; box-shadow: 0 1px 3px #000; border-radius: 4px;">

                    <div apply-font-info style="pointer-events: auto; border-radius: 4px 0 0 4px;background: #080;color:#fff; text-align: center; width: ${dropdownWidth}px">▼</div>
                    <div apply-font-info style="pointer-events: auto; background: #39bf4b;text-align: center; width: ${textWidth}px">${name}</div>
                    <div apply-font-info style="pointer-events: auto; background: #39bf4b; width: ${width2}px">
                        <div style="
                            width: 2px;
                            background: #fffffe;
                            margin-left: auto;
                            border-radius: 4px 0 0 4px;
                            margin-top: 2px;
                            height: ${height}px;
                        "></div>
                    </div>

                    <div style="pointer-events: none; width: ${contentWidth}px;

                        border-top: solid 2px #39bf4b;
                        border-bottom: solid 2px #39bf4b;">

                    </div>
                    <div apply-font-info class="last" style="pointer-events: auto; background: #39bf4b; width: ${width2}px">
                        <div style="
                            width: 2px;
                            background: #fffffe;
                            margin-right: auto;
                            border-radius: 0 4px 4px 0;
                            margin-top: 2px;
                            height: ${height}px;
                        "></div>
                    </div>

                </div>
            `;

            div.querySelectorAll('[apply-font-info]').forEach((d) => {
                editor.applyFontInfo(d);
            });




            if (c++ === 2) {


                div.innerHTML += `

                <div style="pointer-events: auto;background: rgba(255,255,255,.9);position: absolute;z-index: 1000;box-shadow: 0 0 10px rgba(0,0,0,.5);border-radius: 4px;margin-top: 4px;">

              <div style="
                height: 12px;
                background: #39bf4b;
                border-radius: 4px 4px 0 0;
                border-bottom: solid 2px #008800;
            "></div>


              <div style="
                padding: 0 10px;
            ">ダメです  <code style="
                background: #eee;
            ">false</code></div>

            <hr style="
                margin: 0;
                border: none;
                height: 2px;
                background: rgba(0,0,0,.3);
            ">
              <div style="
                padding: 0 10px;
            ">イイです  <code style="
                background: #eee;
            ">true</code></div>

                            </div>

                `;





            }


            div.querySelectorAll('code').forEach((element) => {
                editor.applyFontInfo(element);

                monaco.editor.colorizeElement(element, {
                    mimeType: 'javascript'
                });


            });



            return div;
        }

        getDomNode() {
            if (!this.domNode) this.domNode = this.createDOM();
            return this.domNode;
        }

        getPosition() {
            return {
                position: {
                    lineNumber: this.x,
                    column: this.y
                },
                preference: [monaco.editor.ContentWidgetPositionPreference.EXACT]
            };
        }
    };


    DropdownWidget.collection = [];


    const createWidget = () => {
        model.findMatches(/\/\*▼.+\*\/\(.+?\)/, false, true, false, false, true).forEach((findMatch, i) => {

            const { startLineNumber, startColumn, endColumn } = findMatch.range;


            const matchText = findMatch.matches[0];


            // 毎回 render しないと getOffsetForColumn でバグる
            editor.render();


            // const length = matchText.split('').map((t) => eaw.characterLength(t)).reduce((a, b) => a + b)

            editor.addContentWidget(new DropdownWidget(startLineNumber, startColumn, matchText, findMatch.range));

            // console.log(findMatch);

        });
    };

    window.editor = editor;
    window.monaco = monaco;

    editor.onDidChangeModelContent((e) => {

        DropdownWidget.collection.forEach((widget) => {

            editor.removeContentWidget(widget);

        });

        createWidget();

    });


    editor.onDidChangeCursorPosition((e) => {

        const { lineNumber, column } = e.position;

        DropdownWidget.collection.forEach((widget) => {

            if (lineNumber !== widget.range.startLineNumber) return;

            if (widget.range.startColumn <= column && column < widget.range.endColumn) {

                /*

                editor.setPosition({
                    lineNumber: e.position.lineNumber,
                    column: widget.range.startColumn - 1
                });
                */

            }

        });



        console.info('cursor', e);
    });


    const config = editor.getConfiguration();

    console.log(config);


    const model = editor.getModel();

    /*
    findMatches(searchString: string, searchOnlyEditableRange: boolean, isRegex: boolean, matchCase: boolean, wholeWord: boolean, captureMatches: boolean, limitResultCount?: number)
    */


    createWidget();





});
