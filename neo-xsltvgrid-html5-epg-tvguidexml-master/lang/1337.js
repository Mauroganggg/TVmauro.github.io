var loadingtext =				'\u0031\u00f8\u0061\u00f0\u0031\u00f1\u0036';
var errortext =					'\u0033\u00ae\u00ae\u00f8\u00ae';
var filetext =					'\u0066\u0031\u0031\u0033';
var notfoundtext =				'\u00f1\u00f8\u0037\u0020\u0066\u00f8\u00b5\u00f1\u00f0';

var preferenceslink =			'\u00fe\u00ae\u0033\u0066\u0033\u00ae\u0033\u00f1\u00a9\u0033\u0035';
var datepickerbutton =			'\u0036\u00f8\u0021';
var earliertext =				'\u0033\u0061\u00ae\u0031\u0031\u0033\u00ae';
var latertext =					'\u0031\u0061\u0037\u0033\u00ae';

var gridtab =					'\u0036\u00ae\u0031\u00f0';
var displayhourslabel =			'\u00f0\u0031\u0035\u00fe\u0031\u0061\u00a5\u0020\u0023\u00f8\u00b5\u00ae\u0035';
	var displayhourshint =		'\u0035\u0033\u0031\u0033\u00a9\u0037\u0020\u0037\u0023\u0033\u0020\u00f1\u00b5\u006d\u00df\u0033\u00ae\u0020\u00f8\u0066\u0020\u0023\u00f8\u00b5\u00ae\u0035\u0020\u0037\u00f8\u0020\u00f0\u0031\u0035\u00fe\u0031\u0061\u00a5\u002e';
var autosizelabel =				'\u0041\u00b5\u0037\u00f8\u006d\u0061\u0037\u0031\u00a9\u0020\u0037\u0061\u00df\u0031\u0033\u0020\u0035\u0031\u007a\u0033';
	var autosizehint =			'\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u00f8\u0020\u0061\u00b5\u0037\u00f8\u006d\u0061\u0037\u0031\u00a9\u0061\u0031\u0031\u00a5\u0020\u0035\u0033\u0031\u0033\u00a9\u0037\u0020\u0061\u0020\u0037\u0061\u00df\u0031\u0033\u0020\u0077\u0031\u00f0\u0037\u0023\u0020\u00df\u0061\u0035\u0033\u00f0\u0020\u00f8\u00f1\u0020\u00f1\u00b5\u006d\u00df\u0033\u00ae\u0020\u00f8\u0066\u0020\u00a9\u00f8\u0031\u00b5\u006d\u00f1\u0035\u002e\u0020\u00b5\u00f1\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u00f8\u0020\u0033\u00f1\u0061\u00df\u0031\u0033\u0020\u0037\u0023\u0033\u0020\u00f1\u0033\u002b\u0037\u0020\u0066\u0031\u0033\u0031\u00f0\u002e';
var tablewidthlabel =			'\u0037\u0061\u00df\u0031\u0033\u0020\u0077\u0031\u00f0\u0037\u0023\u0020\u0028\u0031\u00f1\u0020\u00fe\u0031\u002b\u0033\u0031\u0035\u0029';
	var tablewidthhint =		'\u0035\u00fe\u0033\u00a9\u0031\u0066\u00a5\u0020\u0037\u0023\u0033\u0020\u0077\u0031\u00f0\u0037\u0023\u0020\u00f8\u0066\u0020\u0037\u0023\u0033\u0020\u0037\u0061\u00df\u0031\u0033\u0020\u0031\u00f1\u0020\u00fe\u0031\u002b\u0033\u0031\u0035\u002e\u0020\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u0023\u0033\u0020\u0061\u00df\u00f8\u0076\u0033\u0020\u00df\u00f8\u002b\u0020\u0037\u00f8\u0020\u0035\u0033\u0037\u0020\u0037\u0023\u0031\u0035\u0020\u0061\u00b5\u0037\u00f8\u006d\u0061\u0037\u0031\u00a9\u0061\u0031\u0031\u00a5\u002e';
var offsetminuteslabel =		'\u0035\u0037\u0061\u00ae\u0037\u0020\u0077\u0031\u0037\u0023\u0020\u00f1\u0033\u002b\u0037\u0020\u0023\u00f8\u00b5\u00ae\u0020\u0061\u0066\u0037\u0033\u00ae';
	var offsetminuteshint =		'\u0035\u0033\u0037\u0020\u0037\u0023\u0033\u0020\u006d\u0031\u00f1\u00b5\u0037\u0033\u0035\u0020\u00fe\u00f8\u00ae\u0037\u0031\u00f8\u00f1\u0020\u00f8\u0066\u0020\u0037\u0023\u0033\u0020\u0037\u0031\u006d\u0033\u0020\u0061\u0066\u0037\u0033\u00ae\u0020\u0077\u0023\u0031\u00a9\u0023\u0020\u0037\u0023\u0033\u0020\u0036\u00ae\u0031\u00f0\u0020\u0077\u0031\u0031\u0031\u0020\u0035\u0037\u0061\u00ae\u0037\u0020\u0077\u0031\u0037\u0023\u0020\u0037\u0023\u0033\u0020\u00f1\u0033\u002b\u0037\u0020\u0023\u00f8\u00b5\u00ae\u0020\u00f8\u00f1\u0020\u0031\u00f1\u0031\u0037\u0031\u0061\u0031\u0020\u0031\u00f8\u0061\u00f0\u002e';
var refreshonthelabel =			'\u00ae\u0033\u0066\u00ae\u0033\u0035\u0023\u0020\u0033\u0076\u0033\u00ae\u00a5\u0020\u0023\u00f8\u00b5\u00ae\u0020\u0061\u0037';
	var refreshonthehint =		'\u002b\u0035\u0031\u0037\u0076\u0020\u00a9\u0061\u00f1\u0020\u0061\u00b5\u0037\u00f8\u006d\u0061\u0037\u0031\u00a9\u0061\u0031\u0031\u00a5\u0020\u00ae\u0033\u0066\u00ae\u0033\u0035\u0023\u0020\u0037\u0023\u0033\u0020\u0031\u0031\u0035\u0037\u0031\u00f1\u0036\u0035\u0020\u0033\u0076\u0033\u00ae\u00a5\u0020\u0023\u00f8\u00b5\u00ae\u0020\u0037\u00f8\u0020\u0058\u0033\u0033\u00fe\u0020\u0037\u0023\u0033\u0020\u0036\u00ae\u0031\u00f0\u0020\u00b5\u00fe\u002d\u0037\u00f8\u002d\u00f0\u0061\u0037\u0033\u002c\u0020\u0031\u0066\u0020\u0037\u0023\u0033\u0020\u00df\u00ae\u00f8\u0077\u0035\u0033\u00ae\u0020\u0031\u0035\u0020\u0058\u0033\u00fe\u0037\u0020\u00f8\u00fe\u0033\u00f1\u002e\u0020\u0035\u0033\u0031\u0033\u00a9\u0037\u0020\u0037\u0023\u0033\u0020\u0037\u0031\u006d\u0033\u0020\u0033\u0061\u00a9\u0023\u0020\u0023\u00f8\u00b5\u00ae\u0020\u0037\u00f8\u0020\u00fe\u0033\u00ae\u0066\u00f8\u00ae\u006d\u0020\u0037\u0023\u0033\u0020\u00ae\u0033\u0066\u00ae\u0033\u0035\u0023\u002e'
	var norefreshoption =		'\u00f0\u00f8\u0020\u00f1\u00f8\u0037\u0020\u00ae\u0033\u0066\u00ae\u0033\u0035\u0023';
var timebarfrequencylabel = 	'T\u00CEM\u00EB b\u00C3R \u00FEHR\u00EBq\u00DB\u00EB\u00D1\u00E7\u00DD';
	var timebarfrequencyhint =	'H0W 0ft\u00CA\u00D1 2 \u00AE\u00CA\u00FE\u00EB\u00CAT \u00D0\u00C3 t\u00EDm\u00CA h\u00EB\u00CA\u00D0\u00EBR \u00AE0w.';
	var toponlyoption =			'T0p \u00A3\u00ED\u00D1\u00EB 0\u00F1\u00A3\u00DD';
	
var popupstab =					'\u00fe\u00f8\u00fe\u00b5\u00fe\u0035';
var channelpopupslabel =		'\u00a9\u0023\u0061\u00f1\u00f1\u0033\u0031\u0020\u00fe\u00f8\u00fe\u00b5\u00fe\u0035';
	var channelpopupshint =		'\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u00f8\u0020\u0033\u00f1\u0061\u00df\u0031\u0033\u0020\u0037\u0023\u0033\u0020\u00fe\u00f8\u00fe\u00b5\u00fe\u0035\u0020\u0077\u0023\u0033\u00f1\u0020\u0037\u0023\u0033\u0020\u006d\u00f8\u00b5\u0035\u0033\u0020\u0031\u0035\u0020\u00f8\u0076\u0033\u00ae\u0020\u0037\u0023\u0033\u0020\u00a9\u0023\u0061\u00f1\u00f1\u0033\u0031\u0020\u00f1\u0061\u006d\u0033\u0035\u002e';
var descriptionpopupslabel =	'\u00f0\u0033\u0035\u00a9\u00ae\u0031\u00fe\u0037\u0031\u00f8\u00f1\u0020\u00fe\u00f8\u00fe\u00b5\u00fe\u0035';
	var descriptionpopupshint =	'\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u00f8\u0020\u0033\u00f1\u0061\u00df\u0031\u0033\u0020\u0037\u0023\u0033\u0020\u00fe\u00f8\u00fe\u00b5\u00fe\u0035\u0020\u0077\u0023\u0033\u00f1\u0020\u0037\u0023\u0033\u0020\u006d\u00f8\u00b5\u0035\u0033\u0020\u0031\u0035\u0020\u00f8\u0076\u0033\u00ae\u0020\u0061\u0020\u00fe\u00ae\u00f8\u0036\u00ae\u0061\u006d\u002e';
var popupdelaylabel =			'\u00fe\u00f8\u00fe\u00b5\u00fe\u0020\u00f0\u0033\u0031\u0061\u00a5\u0020\u0028\u0031\u00f1\u0020\u006d\u0035\u0029';
	var popupdelayhint =		'\u0035\u0033\u0037\u0020\u0037\u0023\u0033\u0020\u00f0\u0033\u0031\u0061\u00a5\u0020\u0031\u00f1\u0020\u006d\u0031\u0031\u0031\u0031\u0035\u0033\u00a9\u00f8\u00f1\u00f0\u0035\u0020\u00df\u0033\u0066\u00f8\u00ae\u0033\u0020\u00fe\u00f8\u00fe\u00b5\u00fe\u0035\u0020\u0077\u0031\u0031\u0031\u0020\u0061\u00fe\u00fe\u0033\u0061\u00ae\u002e\u0020\u0035\u0033\u0037\u0020\u0061\u0037\u0020\u0030\u0020\u0037\u00f8\u0020\u00f0\u0031\u0035\u0061\u00df\u0031\u0033\u0020\u00f0\u0033\u0031\u0061\u00a5\u002e';
var popuptimeslabel =			'\u0037\u0031\u006d\u0033\u0035';
	var popuptimeshint =		'\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u00f8\u0020\u0035\u0023\u00f8\u0077\u0020\u0035\u0037\u0061\u00ae\u0037\u0020\u0061\u00f1\u00f0\u0020\u0033\u00f1\u00f0\u0020\u0037\u0031\u006d\u0033\u0035\u0020\u0031\u00f1\u0020\u0037\u0023\u0033\u0020\u00fe\u00ae\u00f8\u0036\u00ae\u0061\u006d\u0020\u00fe\u00f8\u00fe\u00b5\u00fe\u0035\u002e';
var popupratinglabel =			'\u00ae\u0061\u0037\u0031\u00f1\u0036';
	var popupratinghint =		'\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u00f8\u0020\u0035\u0023\u00f8\u0077\u0020\u006d\u00fe\u0041\u0041\u0020\u00ae\u0061\u0037\u0031\u00f1\u0036\u0035\u0020\u0031\u00f1\u0020\u0037\u0023\u0033\u0020\u00fe\u00ae\u00f8\u0036\u00ae\u0061\u006d\u0020\u00fe\u00f8\u00fe\u00b5\u00fe\u0035\u002e';
var popupsubtitlelabel =		'\u0035\u00b5\u00df\u0037\u0031\u0037\u0031\u0033';
	var popupsubtitlehint =		'\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u00f8\u0020\u0035\u0023\u00f8\u0077\u0020\u00fe\u00ae\u00f8\u0036\u00ae\u0061\u006d\u0020\u0035\u00b5\u00df\u0037\u0031\u0037\u0031\u0033\u0035\u0020\u0031\u00f1\u0020\u0037\u0023\u0033\u0020\u00fe\u00ae\u00f8\u0036\u00ae\u0061\u006d\u0020\u00fe\u00f8\u00fe\u00b5\u00fe\u0035\u002e';
var popupdescriptionlabel =		'\u00f0\u0033\u0035\u00a9\u00ae\u0031\u00fe\u0037\u0031\u00f8\u00f1';
	var popupdescriptionhint =	'\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u00f8\u0020\u0035\u0023\u00f8\u0077\u0020\u00fe\u00ae\u00f8\u0036\u00ae\u0061\u006d\u0020\u00f0\u0033\u0035\u00a9\u00ae\u0031\u00fe\u0037\u0031\u00f8\u00f1\u0035\u0020\u0031\u00f1\u0020\u0037\u0023\u0033\u0020\u00fe\u00ae\u00f8\u0036\u00ae\u0061\u006d\u0020\u00fe\u00f8\u00fe\u00b5\u00fe\u0035\u002e';
var popupdatelabel =			'\u00f0\u0061\u0037\u0033';
	var popupdatehint =			'\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u00f8\u0020\u0035\u0023\u00f8\u0077\u0020\u00f0\u0061\u0037\u0033\u0035\u0020\u0031\u00f1\u0020\u0037\u0023\u0033\u0020\u00fe\u00ae\u00f8\u0036\u00ae\u0061\u006d\u0020\u00fe\u00f8\u00fe\u00b5\u00fe\u0035\u002e\u0020\u00f0\u0061\u0037\u0033\u0035\u0020\u0061\u00ae\u0033\u0020\u0033\u0031\u0037\u0023\u0033\u00ae\u0020\u00ae\u0033\u0031\u0033\u0061\u0035\u0033\u0020\u00f0\u0061\u0037\u0033\u0035\u0020\u0066\u00f8\u00ae\u0020\u006d\u00f8\u0076\u0031\u0033\u0035\u0020\u00f8\u00ae\u0020\u0066\u0031\u00ae\u0035\u0037\u002d\u0061\u0031\u00ae\u0033\u00f0\u0020\u00f0\u0061\u0037\u0033\u0035\u0020\u0066\u00f8\u00ae\u0020\u0035\u0023\u00f8\u0077\u0035\u002e';
var popupcategorieslabel =		'\u00a9\u0061\u0037\u0033\u0036\u00f8\u00ae\u0031\u0033\u0035';
	var popupcategorieshint =	'\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u00f8\u0020\u0035\u0023\u00f8\u0077\u0020\u0035\u0023\u00f8\u0077\u0020\u00a9\u0061\u0037\u0033\u0036\u00f8\u00ae\u0031\u0033\u0035\u0020\u00f8\u00ae\u0020\u0036\u0033\u00f1\u00ae\u0033\u0035\u0020\u0031\u00f1\u0020\u0037\u0023\u0033\u0020\u00fe\u00ae\u00f8\u0036\u00ae\u0061\u006d\u0020\u00fe\u00f8\u00fe\u00b5\u00fe\u0035\u002e';
var popupstarratinglabel =		'\u0035\u0037\u0061\u00ae\u0020\u00ae\u0061\u0037\u0031\u00f1\u0036';
	var popupstarratinghint =	'\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u00f8\u0020\u0035\u0023\u00f8\u0077\u0020\u0061\u0020\u0036\u00ae\u0061\u00fe\u0023\u0031\u00a9\u0061\u0031\u0020\u0035\u0037\u0061\u00ae\u0020\u00ae\u0061\u0037\u0031\u00f1\u0036\u0020\u0031\u00f1\u0020\u0037\u0023\u0033\u0020\u00fe\u00ae\u00f8\u0036\u00ae\u0061\u006d\u0020\u00fe\u00f8\u00fe\u00b5\u00fe\u0035\u002e';

var localoptionstab =			'\u0031\u00f8\u00a9\u0061\u0031\u0020\u00f8\u00fe\u0037\u0031\u00f8\u00f1\u0035';
var languagelabel =				'\u0031\u0061\u00f1\u0036\u00b5\u0061\u0036\u0033';
var fixgapslabel =				'\u0066\u0031\u002b\u0020\u0036\u0061\u00fe\u0035\u0020\u0031\u00f1\u0020\u0031\u0031\u0035\u0037\u0031\u00f1\u0036\u0035';
	var fixgapshint =			'\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u00f8\u0020\u0033\u00f1\u0061\u00df\u0031\u0033\u0020\u0036\u0061\u00fe\u002d\u00f0\u0033\u0037\u0033\u00a9\u0037\u0031\u00f8\u00f1\u0020\u0031\u00f1\u0020\u0031\u0031\u0035\u0037\u0031\u00f1\u0036\u0035\u0020\u0077\u0023\u0031\u00a9\u0023\u0020\u0061\u00ae\u0033\u0020\u00f1\u00f8\u0037\u0020\u00a9\u00f8\u00f1\u0037\u0031\u0036\u00b5\u00f8\u00b5\u0035\u002e\u0020\u0037\u0023\u0031\u0035\u0020\u00f8\u00fe\u0037\u0031\u00f8\u00f1\u0020\u00ae\u0033\u00b6\u00b5\u0031\u00ae\u0033\u0035\u0020\u0031\u0031\u0035\u0037\u0031\u00f1\u0036\u0035\u0020\u0037\u00f8\u0020\u00df\u0033\u0020\u0035\u00f8\u00ae\u0037\u0033\u00f0\u0020\u0077\u0031\u0037\u0023\u0020\u002d\u002d\u00df\u00a5\u002d\u00a9\u0023\u0061\u00f1\u00f1\u0033\u0031\u0020\u0037\u00f8\u0020\u0077\u00f8\u00ae\u0058\u002e\u0020\u0037\u0023\u0031\u0035\u0020\u00f8\u00fe\u0037\u0031\u00f8\u00f1\u0020\u0077\u0031\u0031\u0031\u0020\u00a9\u0061\u00b5\u0035\u0033\u0020\u0031\u0031\u0035\u0037\u0031\u00f1\u0036\u0035\u0020\u0037\u00f8\u0020\u0031\u00f8\u0061\u00f0\u0020\u006d\u00b5\u00a9\u0023\u0020\u006d\u00f8\u00ae\u0033\u0020\u0035\u0031\u00f8\u0077\u0031\u00a5\u002c\u0020\u0035\u00f8\u0020\u00f0\u00f8\u0020\u00f1\u00f8\u0037\u0020\u00a9\u0023\u0033\u00a9\u0058\u0020\u00b5\u00f1\u00f1\u0033\u00a9\u0033\u0035\u0035\u0061\u00ae\u0031\u0031\u00a5\u002e';
	var fixgapsconfirm =		'\u0037\u00f8\u0020\u0066\u0031\u0031\u0031\u0020\u0036\u0061\u00fe\u0035\u0020\u0031\u00f1\u0020\u0031\u0031\u0035\u0037\u0031\u00f1\u0036\u0035\u002c\u0020\u00fe\u0031\u0033\u0061\u0035\u0033\u0020\u0033\u00f1\u0035\u00b5\u00ae\u0033\u0020\u0037\u0023\u0033\u0020\u002b\u006d\u0031\u0020\u0066\u0031\u0031\u0033\u0020\u0023\u0061\u0035\u0020\u00df\u0033\u0033\u00f1\u0020\u0035\u00f8\u00ae\u0037\u0033\u00f0\u0020\u0077\u0031\u0037\u0023\u0020\u0037\u0023\u0033\u0020\u002d\u002d\u00df\u00a5\u002d\u00a9\u0023\u0061\u00f1\u00f1\u0033\u0031\u0020\u00f8\u00fe\u0037\u0031\u00f8\u00f1\u0021';
var absoluteiconslabel =		'\u0041\u00df\u0035\u00f8\u0031\u00b5\u0037\u0033\u0020\u0031\u00a9\u00f8\u00f1\u0020\u00ae\u0033\u0066\u0033\u00ae\u0033\u00f1\u00a9\u0033\u0035';
	var absoluteiconshint =		'\u002b\u0035\u0031\u0037\u0076\u0020\u0031\u00f8\u00f8\u0058\u0035\u0020\u0066\u00f8\u00ae\u0020\u00a9\u0023\u0061\u00f1\u00f1\u0033\u0031\u0020\u0031\u00a9\u00f8\u00f1\u0035\u0020\u0031\u00f1\u0020\u0061\u00f1\u0020\u005c\u0027\u0031\u00a9\u00f8\u00f1\u0035\u005c\u0027\u0020\u00f0\u0031\u00ae\u0033\u00a9\u0037\u00f8\u00ae\u00a5\u002e\u0020\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u0023\u0031\u0035\u0020\u00df\u00f8\u002b\u0020\u0031\u0066\u0020\u00a5\u00f8\u00b5\u00ae\u0020\u002b\u006d\u0031\u0020\u0066\u0031\u0031\u0033\u0020\u00a9\u00f8\u00f1\u0037\u0061\u0031\u00f1\u0035\u0020\u0061\u00df\u0035\u00f8\u0031\u00b5\u0037\u0033\u0020\u00b5\u00ae\u0031\u0020\u00ae\u0033\u0066\u0033\u00ae\u0033\u00f1\u00a9\u0033\u0035\u0020\u0037\u00f8\u0020\u0031\u00a9\u00f8\u00f1\u0035\u002e';
var dayfirstlabel =				'\u00f0\u0031\u0035\u00fe\u0031\u0061\u00a5\u0020\u00f0\u0061\u00a5\u0020\u0066\u0031\u00ae\u0035\u0037\u0020\u0031\u00f1\u0020\u00f0\u0061\u0037\u0033\u0035';
	var dayfirsthint =			'\u00a9\u0023\u0033\u00a9\u0058\u0020\u0037\u0023\u0031\u0035\u0020\u00df\u00f8\u002b\u0020\u0037\u00f8\u0020\u0035\u0023\u00f8\u0077\u0020\u00f0\u0061\u0037\u0033\u0035\u0020\u0031\u00f1\u0020\u00f0\u00f0\u002f\u006d\u006d\u002f\u00a5\u00a5\u00a5\u00a5\u0020\u0066\u00f8\u00ae\u006d\u0061\u0037\u002e\u0020\u00b5\u00f1\u00a9\u0023\u0033\u00a9\u0058\u0020\u0066\u00f8\u00ae\u0020\u006d\u006d\u002f\u00f0\u00f0\u002f\u00a5\u00a5\u00a5\u00a5\u0020\u0066\u00f8\u00ae\u006d\u0061\u0037\u002e';
var grabberlabel =				'\u0036\u00ae\u0061\u00df\u00df\u0033\u00ae\u003a\u0020\u0037\u0076\u005f\u0036\u00ae\u0061\u00df\u005f';
	var grabberhint =			'\u0035\u0033\u0031\u0033\u00a9\u0037\u0020\u00a5\u00f8\u00b5\u00ae\u0020\u0036\u00ae\u0061\u00df\u00df\u0033\u00ae\u0020\u0037\u00f8\u0020\u0061\u00fe\u00fe\u0031\u00a5\u0020\u0031\u00f8\u00a9\u0061\u0031\u0031\u007a\u0033\u00f0\u0020\u00a9\u0023\u0061\u00f1\u00f1\u0033\u0031\u002d\u00f1\u0061\u006d\u0033\u0020\u0035\u0033\u0037\u0037\u0031\u00f1\u0036\u0035\u002e';

var otheroptionstab =			'\u00f8\u0037\u0023\u0033\u00ae\u0020\u00f8\u00fe\u0037\u0031\u00f8\u00f1\u0035';
var loadonclicklabel =			'\u00f8\u00f1\u0020\u00a9\u0031\u0031\u00a9\u0058\u003a';
	var loadonclicknothing =	'\u00f0\u00f8\u0020\u00f1\u00f8\u0037\u0023\u0031\u00f1\u0036';
	var loadonclickIMDB =		'\u0035\u0033\u0061\u00ae\u00a9\u0023\u0020\u0031\u006d\u00f0\u00df';
	var loadonclickURL =		'\u00b5\u00ae\u0031\u0020\u0031\u00f1\u0020\u002b\u006d\u0031';
var categorycolorslabel =		'\u00a9\u0061\u0037\u0033\u0036\u00f8\u00ae\u00a5\u0020\u0023\u0031\u0036\u0023\u0031\u0031\u0036\u0023\u0037\u0031\u00f1\u0036';
	var categorycolorshint=		'\u0035\u0033\u0031\u0033\u00a9\u0037\u0020\u0037\u00f8\u0020\u0033\u00f1\u0061\u00df\u0031\u0033\u0020\u00a9\u0061\u0037\u0033\u0036\u00f8\u00ae\u00a5\u0020\u0023\u0031\u0036\u0023\u0031\u0031\u0036\u0023\u0037\u0031\u00f1\u0036\u0020\u0028\u00a9\u00f8\u0031\u00f8\u00ae\u0035\u0020\u006d\u00b5\u0035\u0037\u0020\u00df\u0033\u0020\u00f0\u0033\u0066\u0031\u00f1\u0033\u00f0\u0020\u0031\u00f1\u0020\u00a9\u0035\u0035\u0020\u0066\u0031\u0031\u0033\u0035\u0029\u002e\u0020\u00f0\u0033\u0035\u0033\u0031\u0033\u00a9\u0037\u0020\u0066\u00f8\u00ae\u0020\u0061\u0020\u0035\u006d\u0061\u0031\u0031\u0020\u0035\u00fe\u0033\u0033\u00f0\u0020\u0031\u006d\u00fe\u00ae\u00f8\u0076\u0033\u006d\u0033\u00f1\u0037\u002e';
var dailyfileslabel =			'\u00b5\u0035\u0033\u0020\u00f0\u0061\u0031\u0031\u00a5\u0020\u0066\u0031\u0031\u0033\u0035';
	var dailyfileshint=			'\u0035\u0033\u0031\u0033\u00a9\u0037\u0020\u0037\u00f8\u0020\u00b5\u0035\u0033\u0020\u00f0\u0061\u0031\u0031\u00a5\u0020\u0066\u0031\u0031\u0033\u0035\u0020\u0031\u00f1\u0020\u0037\u0023\u0033\u0020\u0066\u00f8\u00ae\u006d\u0061\u0037\u0020\u00a5\u00a5\u00a5\u00a5\u006d\u006d\u00f0\u00f0\u002e\u002b\u006d\u0031\u0020\u0031\u00f1\u0035\u0037\u0033\u0061\u00f0\u0020\u00f8\u0066\u0020\u0061\u0020\u0035\u0031\u00f1\u0036\u0031\u0033\u0020\u0037\u0076\u002e\u002b\u006d\u0031\u0020\u0066\u0031\u0031\u0033\u002e';
var highlightclickablelabel =	'\u0023\u0031\u0036\u0023\u0031\u0031\u0036\u0023\u0037\u0020\u0031\u0031\u00f1\u0058\u0033\u00f0\u0020\u00fe\u00ae\u00f8\u0036\u00ae\u0061\u006d\u0035';
	var highlightclickablehint ='\u0023\u0031\u0036\u0023\u0031\u0031\u0036\u0023\u0037\u0020\u00fe\u00ae\u00f8\u0036\u00ae\u0061\u006d\u0035\u0020\u0077\u0023\u0031\u00a9\u0023\u0020\u0061\u00ae\u0033\u0020\u0031\u0031\u00f1\u0058\u0033\u00f0\u0020\u0037\u00f8\u0020\u0061\u0020\u00b5\u00ae\u0031\u0020\u0028\u0035\u0033\u0037\u0020\u0061\u00df\u00f8\u0076\u0033\u0029\u002e\u0020\u0037\u0023\u0033\u0020\u0037\u00a5\u00fe\u0033\u0020\u00f8\u0066\u0020\u0023\u0031\u0036\u0023\u0031\u0031\u0036\u0023\u0037\u0031\u00f1\u0036\u0020\u00f0\u0033\u00fe\u0033\u00f1\u00f0\u0035\u0020\u00f8\u00f1\u0020\u0037\u0023\u0033\u0020\u0035\u0037\u00a5\u0031\u0033\u0035\u0023\u0033\u0033\u0037\u002e\u0020\u0031\u0037\u0020\u0031\u0035\u0020\u00ae\u0033\u00a9\u00f8\u006d\u006d\u0033\u00f1\u00f0\u0033\u00f0\u0020\u0037\u00f8\u0020\u00f0\u0031\u0035\u0061\u00df\u0031\u0033\u0020\u0037\u0023\u0031\u0035\u0020\u0031\u0066\u0020\u0061\u0031\u0031\u0020\u00fe\u00ae\u00f8\u0036\u00ae\u0061\u006d\u0035\u0020\u0061\u00ae\u0033\u0020\u0037\u00f8\u0020\u00df\u0033\u0020\u0031\u0031\u00f1\u0058\u0035\u002c\u0020\u00f8\u00ae\u0020\u0031\u0066\u0020\u00f1\u00f8\u00f1\u0033\u0020\u0061\u00ae\u0033\u002e';
var highlightmovieslabel =		'\u0023\u0031\u0036\u0023\u0031\u0031\u0036\u0023\u0037\u0020\u006d\u00f8\u0076\u0031\u0033\u0035\u0020\u00ae\u0061\u0037\u0033\u00f0\u0020\u0061\u0037\u0020\u00f8\u00ae\u0020\u00f8\u0076\u0033\u00ae\u003a';
	var highlightmovieshint =	'\u0023\u0031\u0036\u0023\u0031\u0031\u0036\u0023\u0037\u0020\u006d\u00f8\u0076\u0031\u0033\u0035\u0020\u00ae\u0061\u0037\u0033\u00f0\u0020\u0061\u0037\u0020\u00f8\u00ae\u0020\u00f8\u0076\u0033\u00ae\u0020\u0037\u0023\u0031\u0035\u0020\u00f1\u00b5\u006d\u00df\u0033\u00ae\u0020\u00f8\u0066\u0020\u0035\u0037\u0061\u00ae\u0035\u002e\u0020\u0037\u0023\u0033\u0020\u0037\u00a5\u00fe\u0033\u0020\u00f8\u0066\u0020\u0023\u0031\u0036\u0023\u0031\u0031\u0036\u0023\u0037\u0031\u00f1\u0036\u0020\u00f0\u0033\u00fe\u0033\u00f1\u00f0\u0035\u0020\u00f8\u00f1\u0020\u0037\u0023\u0033\u0020\u0035\u0037\u00a5\u0031\u0033\u0035\u0023\u0033\u0033\u0037\u002c\u0020\u00df\u00b5\u0037\u0020\u0031\u0035\u0020\u0036\u0033\u00f1\u0033\u00ae\u0061\u0031\u0031\u00a5\u0020\u0061\u0020\u00df\u00ae\u0031\u0036\u0023\u0037\u0033\u00ae\u0020\u00a9\u00f8\u0031\u00f8\u00ae\u002e\u0020\u0037\u0023\u0031\u0035\u0020\u0031\u0035\u0020\u0035\u0033\u00fe\u0061\u00ae\u0061\u0037\u0033\u0020\u0066\u00ae\u00f8\u006d\u0020\u0037\u0023\u0033\u0020\u00a9\u0061\u0037\u0033\u0036\u00f8\u00ae\u00a5\u0020\u0023\u0031\u0036\u0023\u0031\u0031\u0036\u0023\u0037\u0031\u00f1\u0036\u0020\u00df\u0033\u0031\u00f8\u0077\u002e';
var highlightnewlabel =			'\u0023\u0031\u0036\u0023\u0031\u0031\u0036\u0023\u0037\u0020\u00f1\u0033\u0077\u0020\u0035\u0023\u00f8\u0077\u0035';
	var highlightnewhint =		'\u0023\u0031\u0036\u0023\u0031\u0031\u0036\u0023\u0037\u0020\u0035\u0023\u00f8\u0077\u0035\u0020\u0077\u0023\u0031\u00a9\u0023\u0020\u0061\u00ae\u0033\u0020\u0061\u0031\u00ae\u0031\u00f1\u0036\u0020\u0066\u00f8\u00ae\u0020\u0037\u0023\u0033\u0020\u0066\u0031\u00ae\u0035\u0037\u0020\u0037\u0031\u006d\u0033\u002e\u0020\u0037\u0023\u0033\u0020\u0023\u0031\u0036\u0023\u0031\u0031\u0036\u0023\u0037\u0031\u00f1\u0036\u0020\u0031\u0035\u0020\u0036\u0033\u00f1\u0033\u00ae\u0061\u0031\u0031\u00a5\u0020\u0061\u0020\u00f0\u0061\u00ae\u0058\u0033\u00ae\u0020\u00f8\u00ae\u0020\u0037\u0023\u0031\u00a9\u0058\u0033\u00ae\u0020\u00df\u00f8\u00ae\u00f0\u0033\u00ae\u002e';
var printdateslabel =			'\u0035\u0023\u00f8\u0077\u0020\u006d\u00f8\u0076\u0031\u0033\u0020\u00ae\u0033\u0031\u0033\u0061\u0035\u0033\u0020\u00f0\u0061\u0037\u0033\u0035';
	var printdateshint =		'\u0035\u0023\u00f8\u0077\u0020\u006d\u00f8\u0076\u0031\u0033\u0020\u00ae\u0033\u0031\u0033\u0061\u0035\u0033\u0020\u00f0\u0061\u0037\u0033\u0035\u0020\u0031\u00f1\u0020\u0037\u0023\u0033\u0020\u0036\u00ae\u0031\u00f0\u002e\u0020\u0037\u0023\u0031\u0035\u0020\u0031\u0035\u0020\u0035\u0033\u00fe\u0061\u00ae\u0061\u0037\u0033\u0020\u0066\u00ae\u00f8\u006d\u0020\u0037\u0023\u0033\u0020\u00f0\u0061\u0037\u0033\u0035\u0020\u0031\u00f1\u0020\u0037\u0023\u0033\u0020\u00fe\u00f8\u00fe\u00b5\u00fe\u002c\u0020\u0061\u00f1\u00f0\u0020\u00f8\u00f1\u0031\u00a5\u0020\u0061\u00fe\u00fe\u0031\u0031\u0033\u0035\u0020\u0037\u00f8\u0020\u006d\u00f8\u0076\u0031\u0033\u0035\u002e';
var twelvehourlabel =			'\u00FA$\u00EB Tw\u00EB\u00A3V\u00CA-H0\u00DB\u00AE \u00C7l0k';
	var twelvehourhint =		'\u00DB$\u00EB tW\u00CA\u00A3v\u00EB-H0\u00DBR (w/ \u00E2M \u00E2\u00D1d \u00FEm) \u00ED\u00F1$t\u00CA\u00CAd 0F Tw\u00CA\u00F1T\u00FD-\u00FEH0\u00FA\u00AE-h0\u00FA\u00AE \u00E7\u00A30K.';
var showclocklabel =			'\u00A7h\u00D6w \u00E7\u00A3\u00F4\u00E7k \u00CE\u00D1 \u00FApp\u00EBR \u00AE\u00CEghT';
	var showclockhint =			'\u00C7H\u00EB\u00C7K t\u00F4 \u00A7H\u00F4W \u00E7\u00FAR\u00AE\u00EB\u00D1t t\u00CEM\u00CA \u00C3\u00F1d \u00D0\u00E2T\u00EB \u00ED\u00D1 TH\u00CA t\u00F4\u00FE \u00AE\u00EDGhT \u00D6F \u00FE\u00E2g\u00CA.';
var showbarclocklabel =			'\u00A7H\u00D6W \u00E7l\u00F4\u00C7K \u00ED\u00F1 t\u00F4\u00FE b\u00E2R\n';
	var showbarclockhint =		'\u00E7H\u00EB\u00C7k t\u00F4 \u00A7h\u00D6w \u00C7\u00FARR\u00EB\u00F1t T\u00CEm\u00CA \u00CE\u00F1 th\u00EB t\u00D6p b\u00E2\u00AE.';

var reloadbutton =				'\u00ae\u0033\u0031\u00f8\u0061\u00f0';

var monthnames =				new Array('\u003b\u0061\u00f1\u00b5\u0061\u00ae\u00a5', '\u0066\u0033\u00df\u00ae\u00b5\u0061\u00ae\u00a5', '\u006d\u0061\u00ae\u00a9\u0023', '\u0041\u00fe\u00ae\u0031\u0031', '\u006d\u0061\u00a5', '\u003b\u00b5\u00f1\u0033', '\u003b\u00b5\u0031\u00a5', '\u0041\u00b5\u0036\u00b5\u0035\u0037', '\u0035\u0033\u00fe\u0037\u0033\u006d\u00df\u0033\u00ae', '\u00f8\u00a9\u0037\u00f8\u00df\u0033\u00ae', '\u00f1\u00f8\u0076\u0033\u006d\u00df\u0033\u00ae', '\u00f0\u0033\u00a9\u0033\u006d\u00df\u0033\u00ae');
var daynames =					new Array('\u0035\u00b5\u00f1\u00f0\u0061\u00a5\u000a', '\u006d\u00f8\u00f1\u00f0\u0061\u00a5\u000a', '\u0037\u00b5\u0033\u0035\u00f0\u0061\u00a5', '\u0077\u0033\u00f0\u00f1\u0033\u0035\u00f0\u0061\u00a5', '\u0037\u0023\u00b5\u00ae\u0035\u00f0\u0061\u00a5', '\u0066\u00ae\u0031\u00f0\u0061\u00a5', '\u0035\u0061\u0037\u00b5\u00ae\u00f0\u0061\u00a5');
var dayletters =				new Array('\u00A7', 'm', '7', '\u0270', '\u2020', '\u0192', '5');

var alllabel =					'A11';
var nonelabel =					'\u00f1\u00f8\u00f1\u0033';