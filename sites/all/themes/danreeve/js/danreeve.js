var danreeve = {

	init: function(){
    jQuery(".onepage.about .icons-container .views-row .views-field-title").live("hover", danreeve.showIconText);
    jQuery(".onepage.skills .view-programs .views-row").live("hover", danreeve.spriteProgramIcon);
    jQuery(".onepage .home-dan .text .left .button .button-text").live("hover", danreeve.spriteBatDanBtnOn);
    jQuery(".onepage .home-dan .text .left .button .button-text").live("click", danreeve.spriteBatDanBtnClickOn);
    jQuery(".onepage .home-batdan .text .button-keep .button-text").live("hover", danreeve.spriteBatDanBtnOff);
    jQuery(".onepage .home-batdan .text .button-keep .button-text").live("click", danreeve.spriteBatDanBtnClickOff);
    jQuery(".onepage.about .timeline .image").live('mouseover mouseout', danreeve.timelineImageHover);
    jQuery(".menu a").live('click', danreeve.pageLink);
	},

  showIconText: function(e, node){
    var that = jQuery(this);
    $next = jQuery(that).next();
    if($next.css("display") == "none"){
      $next.show();
    } else {
      $next.hide();
    }
  },

  spriteProgramIcon: function(e, node){
    var that = jQuery(this);
    $rowChildren = jQuery(that).children();
    $programIconText = $rowChildren.last("div");
    if($programIconText.css("color") == 'rgb(204, 204, 204)'){
      $programIconText.css("color", "black");
    } else {
      $programIconText.css("color", "#cccccc");
    }
  },

  spriteBatDanBtnOn: function(e, node){
    if(jQuery(".onepage .home-dan .text .left .button .button-text").css("background-position") !== '0% -56px'){
      jQuery(".onepage .home-dan .text .left .button .button-text").css("background-position", '0% -56px');
    } else {
      jQuery(".onepage .home-dan .text .left .button .button-text").css("background-position", '0% 0%');
    }
  },

  spriteBatDanBtnOff: function(e, node){
    if(jQuery(".onepage .home-batdan .text .button-keep .button-text").css("background-position") !== '0% -56px'){
      jQuery(".onepage .home-batdan .text .button-keep .button-text").css("background-position", '0% -56px');
    } else {
      jQuery(".onepage .home-batdan .text .button-keep .button-text").css("background-position", '0% 0%');
    }
  },

  spriteBatDanBtnClickOn: function(e, node){
    jQuery(".onepage .home-dan .left").animate({
      //opacity: 0.25,
      left: 0+"px",
      width: 'toggle'
    }, 500, function() {
      // Animation complete.
      jQuery(".onepage .home-batdan").css("z-index", "1");
      jQuery(".onepage .home-dan").css("z-index", "-1");
      $html = jQuery(".page").html();
      $html = "<div class='batdan-bg'></div>" + $html;
      jQuery(".page").html($html);
      jQuery(".block-main-menu ul li a.dan-logo").html("<div class='batdan-overlay'>&nbsp;</div>");
    });
    jQuery(".onepage .home-dan .right").animate({
      //opacity: 0.25,
      right: 0+"px",
      width: 'toggle'
    }, 500, function() {
      // Animation complete.
    });
    e.preventDefault();
  },

  spriteBatDanBtnClickOff: function(e, node){
    jQuery(".onepage .home-dan").css("z-index", "1");
    jQuery(".onepage .home-batdan").css("z-index", "-1");
    jQuery(".onepage .home-dan .left").animate({
    //opacity: 0.25,
    right: 0+"px",
    width: 'toggle'
  },500, function() {
    // Animation complete.

  });
  jQuery(".onepage .home-dan .right").animate({
    //opacity: 0.25,
    left: 0+"px",
    width: 'toggle'
  },500, function() {
    // Animation complete.
    $html = jQuery(".page").html();
    $html = $html.replace('<div class="batdan-bg"></div>', "");
    jQuery(".page").html($html);
    jQuery(".block-main-menu ul li a.dan-logo").html("Home");
  });
  e.preventDefault();
  },

  addMenuClass: function(){
    $menuItem = jQuery(".block-main-menu ul li a.dan-logo");
    $listItem = $menuItem.parent();
    $listItem.addClass("home");
  },

  moveTimelineIcons: function(){
    $dots = jQuery(".timeline .dot");
    $dots.each( function(){
      $theclass = jQuery(this).attr("class");
      $theclass = $theclass.split("event-");
      $percentage = "0."+$theclass[1];
      $wheretosit = (783 * parseFloat($percentage)).toFixed(0);
      $wheretosit = parseFloat($wheretosit) + parseFloat(79);
      jQuery(this).css("margin-left", $wheretosit);
    });
  },

  timelineImageHover: function(e){
    $img = jQuery(this).children();
    $source = $img.attr("class");
    if (e.type == 'mouseover') {
      $year = jQuery(this).attr("class");
      $year = $year.split("year-");
      $year = $year[1];
      $newimg = "sites/all/themes/danreeve/css/i/" + $year + ".png";
      $img = $img.attr("src");
      $img = $img.split("sites");
      $child = jQuery(this).children();
      $child.attr("src", $newimg);
      if(jQuery(this).hasClass("event-0")){
        iMarginTop = 4;
      } else if(jQuery(this).hasClass("event-100")) {
        iMarginTop = 3;
      } else {
        iMarginTop = 0;
        iMarginLeft = parseFloat(jQuery(this).css("margin-left"));
        iMarginLeftHover = iMarginLeft - 10;
        jQuery(this).css("margin-left", iMarginLeftHover);
        jQuery(this).css("margin-top", "6px");
        jQuery('.timeline-text.year-'+$year).css("margin-left", iMarginLeftHover - 16);
      }
      jQuery(this).css("margin-top", iMarginTop+"px");
      jQuery('.timeline-text.year-'+$year).show();
    } else {
      // do something on mouseout
      $child = jQuery(this).children();
      $child.attr("src", $source);
      if(jQuery(this).hasClass("dot")){
        jQuery(this).css("margin-top", "6px");
        jQuery(this).css("margin-left", iMarginLeft);
        $year = jQuery(this).attr("class");
        $year = $year.split("year-");
        $year = $year[1];
        jQuery('.timeline-text.year-'+$year).hide();
        jQuery
      } else {
        jQuery(this).attr("style", "");
      }
    }
  },

  pageLink: function(e, node){
    that = jQuery(this);
    sLink = jQuery(that).attr("id");
    $link = sLink.split("-");
    sLink = $link[1];
    offset = jQuery("a[name='"+sLink+"']").offset();
    jQuery('body').animate({
      'scrollTop': offset.top
    }, 2000);
    if((jQuery(this).hasClass("dan-logo")) == false){
      return false;
    }


  }
}

jQuery(function() {
	danreeve.init();
  danreeve.addMenuClass();
  danreeve.moveTimelineIcons();
});
