<?php
/*----------------------------------------------------------------------------------------------------------------------------------------*/
/**
 * Top Header section
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'trend_news_top_header_section',
    array(
        'priority'       => 5,
        'panel'          => 'trend_news_header_options_panel',
        'capability'     => 'edit_theme_options',
        'theme_supports' => '',
        'title'          => __( 'Top Header Display Settings', 'trend-news' ),
        'description'    => __( 'Managed the content display at top header section.', 'trend-news' ),
    )
);

/*----------------------------------------------------------------------------------------------------------------------------------------*/
/**
 *Display Top Header section
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'trend_news_top_header_enable',
    array(
        'default'           => 1,
        'sanitize_callback' => 'trend_news_sanitize_checkbox',
    )
);

$wp_customize->add_control(
    'trend_news_top_header_enable',
    array(
        'section'     => 'trend_news_top_header_section',
        'label'       => __( 'Display Top header', 'trend-news' ),
        'type'        => 'checkbox'
    )       
);




/*----------------------------------------------------------------------------------------------------------------------------------------*/
/**
 *Display Top Header Menu
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'trend_news_top_header_menu_enable',
    array(
        'default'           => 1,
        'sanitize_callback' => 'trend_news_sanitize_checkbox',
    )
);

$wp_customize->add_control(
    'trend_news_top_header_menu_enable',
    array(
        'section'     => 'trend_news_top_header_section',
        'label'       => __( 'Display Top Menu', 'trend-news' ),
        'type'        => 'checkbox'
    )       
);
/*----------------------------------------------------------------------------------------------------------------------------------------*/
/**
 *Display Top Header Search Icon
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'trend_news_top_header_search_icon_enable',
    array(
        'default'           => 1,
        'sanitize_callback' => 'trend_news_sanitize_checkbox',
    )
);

$wp_customize->add_control(
    'trend_news_top_header_search_icon_enable',
    array(
        'section'     => 'trend_news_top_header_section',
        'label'       => __( 'Display Search Icon', 'trend-news' ),
        'type'        => 'checkbox'
    )       
);


/*----------------------------------------------------------------------------------------------------------------------------------------*/
/**
 *Display Top Header Burger Menu
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'trend_news_top_header_burger_menu_icon_enable',
    array(
        'default'           => 1,
        'sanitize_callback' => 'trend_news_sanitize_checkbox',
    )
);

$wp_customize->add_control(
    'trend_news_top_header_burger_menu_icon_enable',
    array(
        'section'     => 'trend_news_top_header_section',
        'label'       => __( 'Display Burger Menu Icon', 'trend-news' ),
        'type'        => 'checkbox'
    )       
);


/*----------------------------------------------------------------------------------------------------------------------------------------*/
/**
 *Display Top Header Social Media
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'trend_news_top_header_social_media_enable',
    array(
        'default'           => 1,
        'sanitize_callback' => 'trend_news_sanitize_checkbox',
    )
);

$wp_customize->add_control(
    'trend_news_top_header_social_media_enable',
    array(
        'section'     => 'trend_news_top_header_section',
        'label'       => __( 'Display Social Media', 'trend-news' ),
        'type'        => 'checkbox'
    )       
);