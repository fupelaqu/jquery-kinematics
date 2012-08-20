/*
|--------------------------------------------------------------------------
| JQuery-kinematics 0.1
| https://github.com/fupelaqu/jquery-kinematics
|--------------------------------------------------------------------------
 */

(function($) {

    // JKinematics.Adapter.showElt = function(target) {
    // $('#' + target).show();
    // };

    // JKinematics.Adapter.hideElt = function(target) {
    // $('#' + target).hide();
    // };

    /**
     * plugin methods
     */
    var methods = {
        init : function(options) {
            return this.each(function() {
                window.JKinematics.store(this.id, options);
            });
        },
        back : function() {
            return this.each(function() {
                var kinematics = window.JKinematics.lookup(this.id);
                if (kinematics !== undefined) {
                    kinematics.previousPhase();
                }
            });
        },
        next : function() {
            return this.each(function() {
                var kinematics = window.JKinematics.lookup(this.id);
                if (kinematics !== undefined) {
                    kinematics.nextPhase();
                }
            });
        },
        /**
         * replay the last failed action within current phase after the
         * specified timeout (in ms)
         */
        replay : function(timeout) {
            return this.each(function() {
                var kinematics = window.JKinematics.lookup(this.id);
                if (kinematics !== undefined) {
                    kinematics.replay = true;
                    kinematics.replayTimeout = timeout;
                }
            });
        },
        goTo : function(step, phase) {
            return this.each(function() {
                var kinematics = window.JKinematics.lookup(this.id);
                if (kinematics !== undefined) {
                    kinematics.goTo(step, phase);
                }
            });
        }
    };

    $.fn.kinematics = function(method) {
        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(
                    arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $
                    .error('Method ' + method
                            + ' does not exist on jQuery.kinematics');
        }
    };
})(jQuery);
