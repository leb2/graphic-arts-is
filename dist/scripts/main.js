"use strict";!function(){skrollr.init({smoothScrolling:!1,forceHeight:!1}),$(".filter").each(function(){var i=$(this).outerWidth(),o=$(this).outerHeight();$(this).children(".triangle").css({"border-left-width":i,"border-bottom-width":o})}),$(".view-process").click(function(){$(this).closest(".description").find(".modal").show().animate({opacity:1},400),$("body").addClass("modal-opened")}),$(".background").click(function(){$(this).closest(".modal").animate({opacity:0},400,function(){$(this).hide()}),$("body").removeClass("modal-opened")}),$(".exit").click(function(){$(this).closest(".modal").animate({opacity:0},400,function(){$(this).hide()}),$("body").removeClass("modal-opened")})}();