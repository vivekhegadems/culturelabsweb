/**
 * Created by jayanth on 17/09/17.
 */
/**
 * Created by jayanth on 17/09/17.
 */
var DISPLAY_TYPES_OBJECT = {
    "post": "post",
    "kanthapaatha": "kanthapaatha",
    "sankalpaMantra": "sankalpaMantra",
    "newsItems": "newsItems",
    "questionAire":"questionAire",
    "photoCarousal": "photoCarousal",
    "series": "series",
};

var COACHMARKTEXT = {
    "hscswipe":"Swipe UP to see more stories",
    "hssswipe":"Swipe RIGHT to see more in this series"
}

var currentTabIndex = 0;
var currentListIndex = 0;

var kannadaStyle = {
    titleStyle:{
        fontSize: 24,
        textOverflow: 'ellipsis',
        fontFamily: 'Arimo',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        borderStyle: 'outset'
    },
    subtitleStyle:{
        fontSize: 20,
        fontFamily: 'Arimo',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
    },
    cardtextstyle:{
        textOverflow: 'ellipsis',
        overflow:'hidden',
        height:'90%',
        display:'inline-block'
    },
    loadingtextstyle:{
        marginLeft:'40%',
        marginTop:'50%'
    }
}
var allPostsStyle = {
    noscroll: {
        width:'40px',
        height:'40px',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10,
        float:'right',
        overflowY: 'scroll',
        align:'right',
        top: 10, right: 12, bottom: 0, left: 0
    }
}

module.exports = {data: DISPLAY_TYPES_OBJECT, kannadaStyle: kannadaStyle, allPostsStyle: allPostsStyle, COACHMARKTEXT:COACHMARKTEXT}