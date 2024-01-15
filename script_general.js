(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    return d(b);
    function d(k, l) {
        switch (k) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['startsWith']('photo'))
                        s = this['getByClassName']('PhotoPlayList');
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        } else
            e['call'](this);
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"height":"100%","start":"this.init()","data":{"locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt","history":{},"name":"Player812","textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"rate":1,"speechOnInfoWindow":false,"pitch":1}},"id":"rootPlayer","minHeight":0,"minWidth":0,"gap":10,"backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"scripts":{"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPixels":TDV.Tour.Script.getPixels,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"initQuiz":TDV.Tour.Script.initQuiz,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"cloneBindings":TDV.Tour.Script.cloneBindings,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"showPopupImage":TDV.Tour.Script.showPopupImage,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"init":TDV.Tour.Script.init,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"registerKey":TDV.Tour.Script.registerKey,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setLocale":TDV.Tour.Script.setLocale,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setValue":TDV.Tour.Script.setValue,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"translate":TDV.Tour.Script.translate,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"isPanorama":TDV.Tour.Script.isPanorama,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showWindow":TDV.Tour.Script.showWindow,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"existsKey":TDV.Tour.Script.existsKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"quizShowScore":TDV.Tour.Script.quizShowScore,"clone":TDV.Tour.Script.clone,"historyGoForward":TDV.Tour.Script.historyGoForward,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getOverlays":TDV.Tour.Script.getOverlays,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"downloadFile":TDV.Tour.Script.downloadFile,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"mixObject":TDV.Tour.Script.mixObject,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"shareSocial":TDV.Tour.Script.shareSocial,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"openLink":TDV.Tour.Script.openLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getKey":TDV.Tour.Script.getKey,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"executeJS":TDV.Tour.Script.executeJS,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"startMeasurement":TDV.Tour.Script.startMeasurement,"playAudioList":TDV.Tour.Script.playAudioList,"getComponentByName":TDV.Tour.Script.getComponentByName,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"createTween":TDV.Tour.Script.createTween,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizFinish":TDV.Tour.Script.quizFinish,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF},"class":"Player","scrollBarMargin":2,"backgroundColorRatios":[0],"watermark":false,"propagateClick":false,"width":"100%","children":["this.MainViewer"],"hash": "d96aa7ff92b9bfd3f565df9c0abe613a57210222468b238f9ac7522eb025e311", "definitions": [{"class":"PlayList","id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_03CE32EE_0EFD_B34A_419B_FCCD1754C83F_camera","media":"this.panorama_03CE32EE_0EFD_B34A_419B_FCCD1754C83F"}]},{"id":"panorama_03CE32EE_0EFD_B34A_419B_FCCD1754C83F_camera","initialSequence":"this.sequence_041E0B91_0EFD_B1D6_4198_D8B4E20158E1","displayOriginPosition":{"hfov":165,"class":"RotationalCameraDisplayPosition","yaw":0,"pitch":-90,"stereographicFactor":1},"class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":4000},{"targetStereographicFactor":0,"class":"TargetRotationalCameraDisplayMovement","easing":"cubic_in_out","duration":4000,"targetPitch":0}]},{"toolTipShadowColor":"#333138","playbackBarHeadBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipTextShadowColor":"#000000","toolTipPaddingLeft":6,"data":{"name":"Main Viewer"},"playbackBarHeight":10,"playbackBarHeadShadow":true,"minHeight":50,"playbackBarBorderColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","minWidth":100,"subtitlesFontFamily":"Arial","progressRight":"33%","playbackBarHeadWidth":6,"playbackBarProgressBorderColor":"#000000","playbackBarProgressBorderSize":0,"progressBarBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","progressBorderSize":0,"subtitlesGap":0,"class":"ViewerArea","vrPointerSelectionTime":2000,"progressOpacity":0.7,"playbackBarBorderRadius":0,"progressLeft":"33%","playbackBarHeadBorderRadius":0,"progressBarBorderSize":0,"playbackBarRight":0,"playbackBarBackgroundOpacity":1,"playbackBarProgressBorderRadius":0,"playbackBarHeadBorderColor":"#000000","toolTipPaddingTop":4,"toolTipPaddingRight":6,"playbackBarBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontColor":"#606060","progressBarBackgroundColor":["#3399FF"],"subtitlesFontColor":"#FFFFFF","height":"100%","width":"100%","progressBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"subtitlesBackgroundColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontSize":"1.11vmin","subtitlesBottom":50,"subtitlesTextShadowHorizontalLength":1,"progressBarBorderColor":"#000000","playbackBarBottom":5,"progressBarBackgroundColorRatios":[0],"progressBorderRadius":2,"toolTipBorderColor":"#767676","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColor":["#000000"],"playbackBarHeadShadowBlurRadius":3,"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","toolTipFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"toolTipPaddingBottom":4,"playbackBarLeft":0,"playbackBarHeadHeight":15,"subtitlesTop":0,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"progressBottom":10,"subtitlesTextShadowColor":"#000000","progressHeight":2,"firstTransitionDuration":0,"progressBorderColor":"#000000","propagateClick":false,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadShadowColor":"#000000","subtitlesFontSize":"3vmin","id":"MainViewer","subtitlesBackgroundOpacity":0.2},{"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","colCount":18,"width":9216,"rowCount":3,"height":1536,"url":"media/panorama_03CE32EE_0EFD_B34A_419B_FCCD1754C83F_0/{face}/0/{row}_{column}.jpg","tags":"ondemand"},{"class":"TiledImageResourceLevel","colCount":12,"width":6144,"rowCount":2,"height":1024,"url":"media/panorama_03CE32EE_0EFD_B34A_419B_FCCD1754C83F_0/{face}/1/{row}_{column}.jpg","tags":"ondemand"},{"class":"TiledImageResourceLevel","colCount":6,"width":3072,"rowCount":1,"height":512,"url":"media/panorama_03CE32EE_0EFD_B34A_419B_FCCD1754C83F_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"]},{"class":"TiledImageResourceLevel","colCount":6,"width":9216,"rowCount":1,"height":1536,"url":"media/panorama_03CE32EE_0EFD_B34A_419B_FCCD1754C83F_0/{face}/vr/0.jpg","tags":"mobilevr"}]},"thumbnailUrl":"media/panorama_03CE32EE_0EFD_B34A_419B_FCCD1754C83F_t.jpg"}],"class":"Panorama","label":trans('panorama_03CE32EE_0EFD_B34A_419B_FCCD1754C83F.label'),"hfovMin":"150%","hfovMax":130,"hfov":360,"thumbnailUrl":"media/panorama_03CE32EE_0EFD_B34A_419B_FCCD1754C83F_t.jpg","vfov":180,"id":"panorama_03CE32EE_0EFD_B34A_419B_FCCD1754C83F","data":{"label":"A\u00e9re Santa Pizza (1)"}},{"arrowKeysAction":"translate","class":"PanoramaPlayer","mode":"quality","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","aaEnabled":true,"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"id":"sequence_041E0B91_0EFD_B1D6_4198_D8B4E20158E1"}],"scrollBarColor":"#000000","layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.18.js.map
})();
//Generated with v2022.2.18, Mon Jan 15 2024