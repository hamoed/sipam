var FlotchartsDemo=function(){
    var e=function(){
        function t(){
            return Math.floor(21*Math.random())+20
        }
        var e=[
            [1,t()],
            [2,t()],
            [3,2+t()],
            [4,3+t()],
            [5,5+t()],
            [6,10+t()],
            [7,15+t()],
            [8,20+t()],
            [9,25+t()],
            [10,30+t()],
            [11,35+t()],
            [12,25+t()],
            [13,15+t()],
            [14,20+t()],
            [15,45+t()],
            [16,50+t()],
            [17,65+t()],
            [18,70+t()],
            [19,85+t()],
            [20,80+t()],
            [21,75+t()],
            [22,80+t()],
            [23,75+t()],
            [24,70+t()],
            [25,65+t()],
            [26,75+t()],
            [27,80+t()],
            [28,85+t()],
            [29,90+t()],
            [30,95+t()]
        ],
        o=[
            [1,t()-5],
            [2,t()-5],
            [3,t()-5],
            [4,6+t()],
            [5,5+t()],
            [6,20+t()],
            [7,25+t()],
            [8,36+t()],
            [9,26+t()],
            [10,38+t()],
            [11,39+t()],
            [12,50+t()],
            [13,51+t()],
            [14,12+t()],
            [15,13+t()],
            [16,14+t()],
            [17,15+t()],
            [18,15+t()],
            [19,16+t()],
            [20,17+t()],
            [21,18+t()],
            [22,19+t()],
            [23,20+t()],
            [24,21+t()],
            [25,14+t()],
            [26,24+t()],
            [27,25+t()],
            [28,26+t()],
            [29,27+t()],
            [30,31+t()]
        ];
        $.plot($("#m_flotcharts_2"),[{
            data:e,
            label:"Unique Visits",
            lines:{lineWidth:1},shadowSize:0},
            {
                data:o,label:"Page Views",
                lines:{lineWidth:1},
                shadowSize:0
            }
        ])
    }
}

jQuery(document).ready(function(){FlotchartsDemo.init()});