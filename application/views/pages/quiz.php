<div id="questions">
        <script id="questions-template" type="text/x-handlebars-template">
          <div id="left">
                <img src="/assets/img/{{numberImg}}.png" alt="">            
            </div>
            <div id="right" class="copy">
                <h3 class="lrg">
                    {{{title}}}    
                </h3>
                <div>
                     <ul class="questionTable">
                        {{#each choices}}
                            <a class="btn" data-value="{{this.pts}}" href="#">
                                {{alphaNum @index}}
                            </a>
                            <li>
                               {{{this.txt}}}
                            </li>
                        {{/each}}
                    </ul>
                </div>
            </div>
        </script>
    </div>