<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 */
?>

<div id="page-wrapper"><div id="page">
  
  <leftside id="sidebar">
    <navigation>
      <?php if ($site_name || $site_slogan): ?>
        <div id="name-and-slogan">
          <?php if ($site_name): ?>
            <?php if ($title): ?>
              <div id="site-name"><strong>
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="logo" href="#top" id="nav-logo">
								  <span><?php print $site_name; ?></span>
									<?php if ($site_slogan): ?>
                    <?php print $site_slogan; ?>
                  <?php endif; ?>
								</a>
              </strong></div>
            <?php else: ?>
              <h1 id="site-name">
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="logo" href="#top" id="nav-logo">
								  <span><?php print $site_name; ?></span>
                  <?php if ($site_slogan): ?>
                    <?php print $site_slogan; ?>
                  <?php endif; ?>									
								</a>
              </h1>
            <?php endif; ?>
          <?php endif; ?>          
        </div> <!-- /#name-and-slogan -->
      <?php endif; ?>
						
      <?php if ($main_menu): ?>
        <div id="navigation"><div class="section">
          <?php print theme('links__system_main_menu', array('links' => $main_menu, 'attributes' => array('id' => 'main-menu', 'class' => array()), 'heading' => '')); ?>
        </div></div> <!-- /.section, /#navigation -->
      <?php endif; ?>   
      <div class="bg_bottom"></div>									
    </navigation>
		<?php if ($page['sidebar_first']): ?>
        <div id="sidebar-first" class="column sidebar"><div class="section">
          <?php print render($page['sidebar_first']); ?>
        </div></div> <!-- /.section, /#sidebar-first -->
      <?php endif; ?>
  </leftside>

  <div id="main-content">
  	<section id="top"></section><!-- do not remove ;)-->
		
		<section id="featured_projects" class="clearfix">
		  <header></header>
			<?php if ($page['featured_projects']): ?>       
        <?php print render($page['featured_projects']); ?>       
      <?php endif; ?>			
		</section>		
		
		<section id="work" class="clearfix">
		  <header></header>
			<?php if ($page['work']): ?>       
        <?php print render($page['work']); ?>       
      <?php endif; ?>			
		</section>	
			
	  <content id="content" class="clearfix">
		  <?php if ($page['content']): ?>       
        <?php // print render($page['content']); ?>       
      <?php endif; ?>			
		</content>		
		
		<section id="about" class="clearfix">
		  <header></header>
		  <?php if ($page['about']): ?>       
        <?php print render($page['about']); ?>       
      <?php endif; ?>			
		</section>		
		
		<section id="contact" class="clearfix">
		  <header></header>
			<?php if ($page['contact']): ?>       
        <?php print render($page['contact']); ?>       
      <?php endif; ?>			
		</section>		
	</div>

</div></div>