/* Initialize code for after base scripts load */

if (("modal" in $.fn) && ("noConflict" in $.fn.modal)) {
    $.fn.bootstrapModal = $.fn.modal.noConflict();
}

