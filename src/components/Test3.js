.entry-sss {
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.home-entry{
    position:relative;
    padding-top:8rem;
    background-repeat:no-repeat;
    background-position:center bottom;
}

.home-entry .btn{
    z-index:1;
    position:absolute;
    right:0;
    bottom:0;
    margin:0;
    max-width:335px;
    width:100%;
}

.home-entry .btn:after{
content: '';
    z-index: 6;
    position: absolute;
    right: -400px;
    bottom:0;
    width: 400px;
    height: 100%;
    background:#ed1c24
}

.logos{
    display:flex;
    justify-content:center;
    align-items:center
}

.logos img{margin:0.5rem 1.55rem}

.advantage{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:2rem 0
}

.advantage li{
    color: #121212;
    font-family:Norwester;
    font-weight: 400;
    font-size: 1.5em;
    text-transform:uppercase;
    list-style-type:none
}

.info-wrp{
    padding-right:40%
}

/* #region Headings */

.entry-content h1,
.entry-content h2,
.entry-content h3,
.entry-content h4,
.entry-content h5,
.entry-content h6 {
    margin: 0 0 1rem;
    color: #1c1a1a;
    font-family:Norwester;
    font-weight: 400;
    line-height: 1.25;
    text-transform:uppercase
}

.entry-content h1 {
    font-size: 2.5rem;
}

.page-home .entry-content h2{
    font-size: 3.875em
}

.entry-content h2 {
    font-size: 2.25rem;
}

.entry-content h3 {
    font-size: 2rem;
}

.entry-content h4 {
    font-size: 1.75rem;
}

.entry-content h5 {
    font-size: 1.5rem;
}

.entry-content h6 {
    font-size: 1.25rem;
}

.entry-content h1 b,
.entry-content h2 b,
.entry-content h3 b,
.entry-content h4 b,
.entry-content h5 b,
.entry-content h6 b,
.entry-content h1 strong,
.entry-content h2 strong,
.entry-content h3 strong,
.entry-content h4 strong,
.entry-content h5 strong,
.entry-content h6 strong {
    color: #ed1c24;
    font-size:1em;
    font-family:inherit;
    font-weight:inherit;
}

/* #endregion */

/* #region Containers */

.entry-content p,
.entry-content ul,
.entry-content ol,
.entry-content dl,
.entry-content table,
.entry-content pre,
.entry-content fieldset,
.entry-content address,
.entry-content blockquote,
.entry-content figure {
    margin: 0 0 2rem;
    color: #323544;
    font-weight: 400;
    font-family:Akrobat;
    font-size: 1.25em;
}

.entry-content ul {
    list-style: square inside none;
}

.entry-content ol {
    list-style: decimal inside none;
}

.entry-content ol ol {
    list-style: upper-alpha inside none;
}

.entry-content ol ol ol {
    list-style: lower-roman inside none;
}

.entry-content ol ol ol ol {
    list-style: lower-alpha inside none;
}

.entry-content ul ul,
.entry-content ol ol,
.entry-content ul ol,
.entry-content ol ul {
    margin: 0.5rem 0 0 1.5rem;
}

.entry-content ul li+li,
.entry-content ol li+li {
    margin-top: 0.5rem;
}

.entry-content dl dl {
    margin: 0 0 0 1.5rem;
}

.entry-content dt {
    font-weight: bolder;
}

.entry-content dd {
    margin: 0 0 0 1rem;
}

.entry-content dl dt+dt,
.entry-content dl dd+dt,
.entry-content dl dd+dd {
    margin: 1rem 0 0;
}

.entry-content fieldset {
    padding: 1rem;
    border: 1px solid #999;
}

.entry-content fieldset legend {
    padding: 0 1rem;
    color: #ff0000;
}

.entry-content blockquote {
    padding: 1rem;
    background: #f5f5f5;
    border-left: 0.25rem solid #ccc;
}

.entry-content pre {
    padding: 1rem;
    border: 1px dotted #ccc;
    background: #f5f5f5;
    overflow: scroll;
}

.entry-content address {
    font-style: italic;
}

/* #endregion */

/* #region Links */

.entry-content a {
    color: #ff0000;
}

.entry-content a:hover,
.entry-content a:focus,
.entry-content a:active {
    color: #333;
}

/* #endregion */

/* #region Text */

.entry-content u {
    text-decoration: underline;
}

.entry-content i,
.entry-content q,
.entry-content cite,
.entry-content em {
    font-style: italic;
}

.entry-content code,
.entry-content kbd,
.entry-content var,
.entry-content samp {
    font-weight: 400;
    font-size: 1rem;
    font-family: 'Courier New', monospace;
}

.entry-content big,
.entry-content .big {
    font-size: 1.25rem;
}

.entry-content small,
.entry-content .small {
    font-size: 0.75rem;
}

.entry-content sup,
.entry-content sub {
    position: relative;
    vertical-align: baseline;
    height: 0;
    font-size: 0.625em;
}

.entry-content sup {
    bottom: 1ex;
}

.entry-content sub {
    top: .7ex;
}

.entry-content abbr,
.entry-content acronym,
.entry-content dfn {
    border-bottom: 1px dotted #999;
    cursor: help;
}

.entry-content mark {
    background: #ff0;
    color: #000;
}

.entry-content ins {
    background: #ccffcc;
    color: #000;
    text-decoration: none;
}

.entry-content del {
    background: #ffcccc;
    color: #000;
    text-decoration: line-through;
}

.entry-content s,
.entry-content strike {
    text-decoration: line-through;
}

/* #endregion */

/* #region Images */

.entry-content img {
    max-width: 100%;
    height: auto !important;
    margin-bottom: 2rem;
}

.entry-content a img,
.entry-content p img,
.entry-content ul img,
.entry-content ol img,
.entry-content dl img,
.entry-content figure img,
.entry-content .figure img {
    margin-bottom: 0;
}

.entry-content img.left,
.entry-content img.right {
    margin-bottom: 2rem;
}

.entry-content a:hover img,
.entry-content a:focus img,
.entry-content a:active img {
    cursor: pointer;
    opacity: 0.75;
}

/* #endregion */

/* #region Figures */

.entry-content figure,
.entry-content .figure {
    max-width: 100%;
    margin-bottom: 2rem;
    border: 1px solid #ccc;
    padding: 0.5rem;
    background: #fff;
}

.entry-content figure figcaption,
.entry-content .figure .figcaption {
    display: block;
    margin: 0.5rem 0 0;
}

/* #endregion */

/* #region Positioning */

.entry-content .left {
    float: left;
    margin-right: 2rem;
}

.entry-content .right {
    float: right;
    margin-left: 2rem;
}

.entry-content .center {
    clear: both;
    display: block;
    margin: 0 auto 2rem;
    text-align: center;
}

/* #endregion */

/* #region Alignment */

.entry-content .text-left {
    text-align: left;
}

.entry-content .text-right {
    text-align: right;
}

.entry-content .text-center {
    text-align: center;
}

.entry-content .text-justify {
    text-align: justify;
}

/* #endregion */

/* #region Separators */

.entry-content hr {
    clear: both;
    width: 100%;
    margin: 2rem auto;
    border: none;
    border-top: 1px solid #eee;
}

/* #endregion */

/* #region Clearfix */

.entry-content .clearfix,
.entry-content .clear {
    clear: both;
}

.entry-content .clearfix:before,
.entry-content .clearfix:after,
.entry-content .clear:before,
.entry-content .clear:after {
    display: block;
    content: '';
    clear: both;
}

/* #endregion */

/* #region Tables */

.entry-content table {
    position: relative;
    width: 100%;
    max-width: 100%;
    border: 0;
    background: #fff;
    text-align: center;
    vertical-align: middle;
}

.entry-content table th {
    padding: 0.5rem 1.5rem;
    background: #fff;
    color: #999;
}

.entry-content table th+th,
.entry-content table th+td {
    border-left: 1px solid #999;
}

.entry-content table td {
    padding: 0.5rem 1.5rem;
}

.entry-content table td+td,
.entry-content table td+th {
    border-left: 1px solid #999;
}

.entry-content table tr+tr th,
.entry-content table tr+tr td {
    border-top: 1px solid #999;
}

.entry-content table.datatable {
    width: 100%;
    border: 1px solid #999;
    text-align: left;
}

.entry-content table.datatable th {
    padding: 1rem;
    background: #fff;
    color: #ff0000;
}

.entry-content table.datatable th+th,
.entry-content table.datatable th+td {
    border-left: 1px solid #999;
}

.entry-content table.datatable td {
    padding: 1rem;
    background: #f5f5f5;
}

.entry-content table.datatable td+th,
.entry-content table.datatable td+td {
    border-left: 1px solid #999;
}

.entry-content table.datatable tr+tr th,
.entry-content table.datatable tr+tr td {
    border-top: 1px solid #999;
}

/* #endregion */

/* #region Internal Grid */

.entry-content .flex-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -12px;
    margin-left: -12px;
}

.entry-content .flex-row>[class*="flex-col"] {
    position: relative;
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
}

.entry-content .flex-col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
}

.entry-content .flex-col-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
}

.entry-content .flex-col-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
}

.entry-content .flex-col-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}

.entry-content .flex-col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
}

.entry-content .flex-col-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}

.entry-content .flex-col-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
}

.entry-content .flex-col-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}

.entry-content .flex-col-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
}

.entry-content .flex-col-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
}

.entry-content .flex-col-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
}

.entry-content .flex-col-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
}

.entry-content .flex-col-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
}

.entry-content .flex-col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}

/* #endregion */

/* #region Entry Content Queries */

@media (max-width: 991px) {

    .entry-content .left,
    .entry-content .right {
        float: none;
        display: block;
        margin: 0 0 2rem;
    }

    .entry-content .flex-col,
    .entry-content .flex-col-auto,
    .entry-content .flex-col-1,
    .entry-content .flex-col-2,
    .entry-content .flex-col-3,
    .entry-content .flex-col-4,
    .entry-content .flex-col-5,
    .entry-content .flex-col-6,
    .entry-content .flex-col-7,
    .entry-content .flex-col-8,
    .entry-content .flex-col-9,
    .entry-content .flex-col-10,
    .entry-content .flex-col-11,
    .entry-content .flex-col-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

}

/* #endregion */