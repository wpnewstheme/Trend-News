<?php
/*----------------------------------------------------------------------------------------------------------------------------------------*/
/**
 * Top Header Social Media
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'trend_news_top_header_social_media',
    array(
        'priority'       => 5,
        'panel'          => 'trend_news_header_options_panel',
        'capability'     => 'edit_theme_options',
        'theme_supports' => '',
        'title'          => __( 'Top Header & Side Menu Social Media', 'trend-news' ),
        'description'    => __( 'Managed the content display at top header and Side Menu Social Media.', 'trend-news' ),
    )
);


// Facebook Url

$wp_customize->add_setting('trend_news_top_header_fb_url',array(
      'capability'     => 'edit_theme_options',
      'sanitize_callback' => 'esc_url_raw',
      'default' =>  ''
    )
  );

  $wp_customize->add_control(new WP_Customize_Control($wp_customize,'trend_news_top_header_fb_url',array(
      'label' => __('Facebook URL','trend-news'),
      'type' => 'url',
      'section' => 'trend_news_top_header_social_media',
      'settings' => 'trend_news_top_header_fb_url',
    )
  ));


    // Twitter Url
  
    $wp_customize->add_setting('trend_news_top_header_twitter_url',array(
      'capability'        => 'edit_theme_options',
      'sanitize_callback' => 'esc_url_raw',
      'default'           => ''
    ) );

  $wp_customize->add_control(new WP_Customize_Control($wp_customize,'trend_news_top_header_twitter_url',array(
      'label'    => __('Twitter URL','trend-news'),
      'type'     => 'url',
      'section'  => 'trend_news_top_header_social_media',
      'settings' => 'trend_news_top_header_twitter_url',
    )
  ));


  // Instagram Url
  
    $wp_customize->add_setting('trend_news_top_header_instagram_url',array(
      'capability'        => 'edit_theme_options',
      'sanitize_callback' => 'esc_url_raw',
      'default'           =>  ''
    ) );

    $wp_customize->add_control(new WP_Customize_Control($wp_customize,'trend_news_top_header_instagram_url',array(
      'label'    => __('Instagram URL','trend-news'),
      'type'     => 'url',
      'section'  => 'trend_news_top_header_social_media',
      'settings' => 'trend_news_top_header_instagram_url',
    )
    ));


    // Youtube Url
    $wp_customize->add_setting('trend_news_top_header_youtube_url',array(
      'capability'        => 'edit_theme_options',
      'sanitize_callback' => 'esc_url_raw',
      'default'           =>  ''
    ) );

    $wp_customize->add_control(new WP_Customize_Control($wp_customize,'trend_news_top_header_youtube_url',array(
      'label'    => __('Youtube URL','trend-news'),
      'type'     => 'url',
      'section'  => 'trend_news_top_header_social_media',
      'settings' => 'trend_news_top_header_youtube_url',
    )
    ));


    // Pinterest Url
    $wp_customize->add_setting('trend_news_top_header_pinterest_url',array(
      'capability'        => 'edit_theme_options',
      'sanitize_callback' => 'esc_url_raw',
      'default'           =>  ''
    ) );

    $wp_customize->add_control(new WP_Customize_Control($wp_customize,'trend_news_top_header_pinterest_url',array(
      'label'    => __('Pinterest URL','trend-news'),
      'type'     => 'url',
      'section'  => 'trend_news_top_header_social_media',
      'settings' => 'trend_news_top_header_pinterest_url',
    )
    ));


    // Dribble Url
    $wp_customize->add_setting('trend_news_top_header_dribble_url',array(
      'capability'        => 'edit_theme_options',
      'sanitize_callback' => 'esc_url_raw',
      'default'           =>  ''
    ) );

    $wp_customize->add_control(new WP_Customize_Control($wp_customize,'trend_news_top_header_dribble_url',array(
      'label'    => __('Dribble URL','trend-news'),
      'type'     => 'url',
      'section'  => 'trend_news_top_header_social_media',
      'settings' => 'trend_news_top_header_dribble_url',
    )
    ));