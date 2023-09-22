export default function setFaq() {
    $(document).ready(function () {
        if (location.hash != null && location.hash != '') {
            var $id = location.hash;
    
            $('[data-tab]').removeClass('active');
            $('[href="' + $id + '"]').addClass('active');
    
            $('.conteudo').removeClass('active');
            $($id).addClass('active');
        }
    
        $('[data-tab]').on('click', function (event) {
            event.preventDefault();
    
            var $id = $(this).attr('href');
    
            $('[data-tab]').removeClass('active');
            $(this).addClass('active');
    
            $('.conteudo').removeClass('active');
            $($id).addClass('active');
        });
    });
}
