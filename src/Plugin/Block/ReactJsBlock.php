<?php

namespace Drupal\cxdx_react_builder\Plugin\Block;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Block\BlockPluginInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;

/**
 * Provides a 'ReactJs' Block.
 *
 * @Block(
 *   id = "react_js_block",
 *   admin_label = @Translation("ReactJs Block"),
 *   category = @Translation("Cxdx"),
 * )
 */
class ReactJsBlock extends BlockBase implements BlockPluginInterface
{
  /**
   * {@inheritdoc}
   */
  public function build()
  {
    $build = [
      '#theme' => 'react_js_block',
      '#status' => TRUE,
      '#attached' => [
        'library' => [
          'cxdx_react_builder/react-builder',
        ],
      ],
    ];
    return $build;
  }

  /**
   * {@inheritdoc}
   * return 0 If you want to disable caching for this block.
   */
  public function getCacheMaxAge()
  {
    return 0;
  }

  /**
   * {@inheritdoc}
   */
  public function access(AccountInterface $account, $return_as_object = FALSE)
  {
    return AccessResult::allowedIfHasPermission($account, 'access content');
  }

}
