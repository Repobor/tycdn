<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>

        </div><!-- end .row -->
    </div>
</div><!-- end #body -->

<footer id="footer" role="contentinfo">
    &copy;<?php echo date('Y'); ?> <a href="<?php $this->options->siteUrl(); ?>"><?php $this->options->title(); ?></a>.
    <?php _e('由 <a href="http://www.typecho.org">Typecho</a> 强力驱动'); ?>.
<a href="https://beian.miit.gov.cn/" target="_blank"> 粤ICP备2021076601号</a>
</footer><!-- end #footer -->

<?php $this->footer(); ?>
</body>
</html>
